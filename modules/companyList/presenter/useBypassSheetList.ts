import { useNavigation } from "@react-navigation/native";
import { bypassListModel } from "../../shared/entities/bypassList/BypassListModel";
import { IBypassSheet } from "../../shared/entities/bypassList/IBypassSheet";
import { bypassReportModel } from "../../shared/entities/bypassReport/BypassReportModel";

export const useBypassSheetList = () => {
    const navigation = useNavigation<any>();
    const bypassList = bypassListModel.bypassList;

    const onGoCreateBypassList = () => {
        navigation.navigate('BypassSheetCreateView');
    };

    const onChoseItem = (item: IBypassSheet) => {
        bypassReportModel.bypassReport = item;
        navigation.navigate('BypassSheetView');
    };

    const onEditItem = (item: IBypassSheet) => {
        bypassReportModel.bypassReport = item;
        navigation.navigate('BypassSheetCreateView', { item });
    };

    return { bypassList, onGoCreateBypassList, onChoseItem, onEditItem }
}