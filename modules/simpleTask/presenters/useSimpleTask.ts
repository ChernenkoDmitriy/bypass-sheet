import { useNavigation } from "@react-navigation/native";
import { useCallback, useEffect, useRef } from "react";
import { appStateModel } from "../../shared/entities/appState/AppStateModel";
import { ISimpleTask } from "../../shared/entities/simpleTask/ISimpleTask";
import { ITaskContent } from "../../shared/entities/simpleTask/ITaskContent";
import { simpleTaskModel } from "../../shared/entities/simpleTask/SimpleTaskModel";
import { simpleTaskModule } from "../module/SimpleTaskModule";

export const useSimpleTask = () => {
    const navigation = useNavigation();
    const activeContentId = useRef<number | string>(0);
    const chosenSimpleTask = simpleTaskModel.chosenSimpleTask;

    useEffect(() => {
        return () => { simpleTaskModel.chosenSimpleTask = null; }
    }, []);

    const onSetActiveContentId = useCallback((id: number | string) => {
        activeContentId.current = id;
    }, []);

    const getCurrentItemIndex = () => {
        return chosenSimpleTask?.content.findIndex(item => item.id === activeContentId.current) || 0;
    }

    const onAddCheckBox = () => {
        const nextIndex = getCurrentItemIndex();
        const content: ITaskContent = { id: `${Date.now()}`, type: 'TEXT', text: '', sort_number: 1, is_done: false, is_show_check_box: true };
        simpleTaskModel.addContent(content, nextIndex);
    };

    const onAddText = () => {
        const nextIndex = getCurrentItemIndex();
        const content: ITaskContent = { id: `${Date.now()}`, type: 'TEXT', text: '', sort_number: 1, is_done: false, is_show_check_box: false };
        simpleTaskModel.addContent(content, nextIndex);
    };

    const normalizeSipleTask = () => {
        let content = chosenSimpleTask?.content.map((item, index) => {
            if (typeof item.id === 'string') {
                // @ts-ignore
                delete item.id;
            }
            item.sort_number = index + 1;
            return item;
        }) || [];
        content = content.sort((a, b) => a.sort_number - b.sort_number);
        return { ...chosenSimpleTask as ISimpleTask, content }
    }

    const onSaveTask = async () => {
        if (chosenSimpleTask) {
            appStateModel.isLoading = true;
            const task = normalizeSipleTask();
            await simpleTaskModule.updateSimpleTask(task);
            appStateModel.isLoading = false;
            navigation.goBack();
        }
    };

    const onDeleteTask = async () => {
        if (chosenSimpleTask) {
            appStateModel.isLoading = true;
            await simpleTaskModule.deleteSimpleTask(chosenSimpleTask.id as number);
            appStateModel.isLoading = false;
            navigation.goBack();
        }
    };

    return { chosenSimpleTask, onAddCheckBox, onSetActiveContentId, onAddText, onSaveTask, onDeleteTask };
}
