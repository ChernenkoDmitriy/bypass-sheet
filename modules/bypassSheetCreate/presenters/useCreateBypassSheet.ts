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
    const bypassList: IBypassSheet | undefined = useRoute<any>().params?.item;
    const [title, setTitle] = useState(bypassList?.title || '');
    const [address, setAddress] = useState(bypassList?.address || '');
    const [bypassSheetItems, setBypassSheetItems] = useState<IBypassItem[]>(bypassList?.items || []);
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
        if (bypassList) {
            const bypassSheet: IBypassSheet = { ...bypassList, title, address, items: bypassSheetItems, }
            bypassListModel.updateBypassSheet(bypassSheet);
        } else {
            const bypassSheet: IBypassSheet = { title, address, id: Date.now(), items: bypassSheetItems, }
            bypassListModel.addBypassList(bypassSheet);
        }
        navigation.goBack();
    }

    const onDelete = () => {
        if (bypassList) {
            bypassListModel.deleteBypassList(bypassList);
            navigation.goBack();
        }
    }

    return {
        bypassList, scroll, bypassSheetItems, title, address, setAddress, setTitle,
        onAddBypassItem, onDeleteBypassItem, onChangeTitle, onCreate, onDelete
    };
}
