import { useRef, useState } from "react"
import { FlatList, NativeModules } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { IBypassItem } from "../../shared/entities/bypassList/IBypassItem";
import { StackNavigationProp } from "@react-navigation/stack";
import { bypassListModel } from "../../shared/entities/bypassList/BypassListModel";
import { IBypassSheet } from "../../shared/entities/bypassList/IBypassSheet";

const { UIManager } = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
    UIManager.setLayoutAnimationEnabledExperimental(true);

export const useCreateBypassSheet = () => {
    const navigation = useNavigation<StackNavigationProp<any>>();
    const companyId = useRoute<any>().params?.companyId || 0;
    const [title, setTitle] = useState('');
    const [bypassSheetItems, setBypassSheetItems] = useState<IBypassItem[]>([]);
    const scroll = useRef<FlatList<IBypassItem> | null>();

    const onAddBypassItem = () => {
        const item = { id: Date.now(), title: '', comment: '', date: '', rate: 0, photos: [], sortNumber: 0, isDone: false };
        setBypassSheetItems([...bypassSheetItems, item]);
        setTimeout(() => {
            scroll.current?.scrollToEnd();
        }, 200);
    }

    const onDeleteBypassItem = (id: number) => {
        setBypassSheetItems(prev => prev.filter(item => item.id !== id));
    }

    const onChangeTitle = (text: string, id: number) => {
        setBypassSheetItems(prev => prev.map(item => {
            if (item.id === id) {
                return { ...item, title: text }
            }
            return item;
        }));
    }

    const onCreate = () => {
        const bypassSheet: IBypassSheet = { title: title, id: Date.now(), items: bypassSheetItems, }
        bypassListModel.addBypassList(companyId, bypassSheet);
        navigation.goBack();
    }

    return { scroll, bypassSheetItems, title, setTitle, onAddBypassItem, onDeleteBypassItem, onChangeTitle, onCreate };
}
