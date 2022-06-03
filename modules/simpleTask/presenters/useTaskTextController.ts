import { useCallback, useRef } from "react";
import { NativeSyntheticEvent, TextInputKeyPressEventData, TextInputSelectionChangeEventData } from "react-native";
import { ITaskText } from "../../shared/entities/simpleTask/ITaskContent";
import { simpleTaskModel } from "../../shared/entities/simpleTask/SimpleTaskModel";

export const useTaskTextController = () => {
    const selection = useRef<number>(0);

    const onChangeText = useCallback((text: string, item: ITaskText) => {
        item.text = text;
        simpleTaskModel.updateContent(item);
    }, []);

    const onKeyPress = useCallback((event: NativeSyntheticEvent<TextInputKeyPressEventData>, item: ITaskText) => {
        const char = event.nativeEvent.key;
        // @ts-ignore
        if (char === 'Backspace' && !item.text.length && simpleTaskModel.chosenSimpleTask?.content.length > 1) {
            simpleTaskModel.removeContent(item);
        }
    }, []);

    const onDoneTask = useCallback((item: ITaskText) => {
        simpleTaskModel.updateContent({ ...item, is_done: !item.is_done });
    }, []);

    const onSelectionChange = useCallback((event: NativeSyntheticEvent<TextInputSelectionChangeEventData>) => {
        selection.current = event.nativeEvent.selection.end;
    }, []);

    return { onKeyPress, onChangeText, onDoneTask, onSelectionChange };
}