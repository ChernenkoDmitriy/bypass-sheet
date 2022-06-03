import { useNavigation } from "@react-navigation/native";
import { bypassListModel } from "../../shared/entities/bypassList/BypassListModel";
import { IBypassSheet } from "../../shared/entities/bypassList/IBypassSheet";
import { bypassReportModel } from "../../shared/entities/bypassReport/BypassReportModel";

export const useBypassSheetList = () => {
    const navigation = useNavigation<any>();
    const bypassList = bypassListModel.bypassList;

    const onGoCreateBypassCompany = () => {
        navigation.navigate('BypassCompanyView');
    }

    const onChoseItem = (item: IBypassSheet) => {
        bypassReportModel.bypassReport = item;
        navigation.navigate('BypassSheetView');
    }

    return { bypassList, onGoCreateBypassCompany, onChoseItem }
}