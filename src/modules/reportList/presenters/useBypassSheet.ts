import { useNavigation } from "@react-navigation/native";
import { Alert, LayoutAnimation, NativeModules } from "react-native";
import { ICropedImage } from "../../../../libs/imagePicker/IImagePicker/ICropedImage";
import { appStateModel } from "../../shared/entities/appState/AppStateModel";
import { IBypassSheet } from "../../shared/entities/bypassList/IBypassSheet";
import { bypassReportModel } from "../../shared/entities/bypassReport/BypassReportModel"
import { createLocalReport } from "../useCases/CreateReport";
import { uploadGoogleSheetUseCase } from "../useCases/UpdateGoogleSheetUseCase";

const { UIManager } = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
    UIManager.setLayoutAnimationEnabledExperimental(true);

export const useBypassSheet = () => {
    const navigation = useNavigation();
    const bypassReport = bypassReportModel.bypassReport;

    const onChangeComment = (text: string, id: number) => {
        if (bypassReportModel.bypassReport) {
            const items = bypassReportModel.bypassReport.items.map(item => {
                if (item.id === id) {
                    return { ...item, comment: text };
                }
                return item;
            })
            bypassReportModel.bypassReport = { ...bypassReportModel.bypassReport, items } as IBypassSheet;
        }
    };

    const onChangeRate = (rate: number, id: number) => {
        LayoutAnimation.spring();
        if (bypassReportModel.bypassReport) {
            const items = bypassReportModel.bypassReport.items.map(item => {
                if (item.id === id) {
                    return { ...item, rate };
                }
                return item;
            })
            bypassReportModel.bypassReport = { ...bypassReportModel.bypassReport, items } as IBypassSheet;
        }
    };

    const onChangeIsDone = (id: number) => {
        if (bypassReportModel.bypassReport) {
            const items = bypassReportModel.bypassReport.items.map(item => {
                if (item.id === id) {
                    return { ...item, isDone: !item.isDone };
                }
                return item;
            })
            bypassReportModel.bypassReport = { ...bypassReportModel.bypassReport, items } as IBypassSheet;
        }
    };

    const onAddPhoto = (photo: ICropedImage, id: number) => {
        LayoutAnimation.spring();
        if (bypassReportModel.bypassReport) {
            const items = bypassReportModel.bypassReport.items.map(item => {
                if (item.id === id) {
                    return { ...item, photos: [...item.photos, photo] };
                }
                return item;
            })
            bypassReportModel.bypassReport = { ...bypassReportModel.bypassReport, items } as IBypassSheet;
        }
    };

    const onDeletePhoto = (id: number, path: string) => {
        LayoutAnimation.spring();
        if (bypassReportModel.bypassReport) {
            const items = bypassReportModel.bypassReport.items.map(item => {
                if (item.id === id) {
                    return { ...item, photos: item.photos.filter(item => item.path !== path) };
                }
                return item;
            })
            bypassReportModel.bypassReport = { ...bypassReportModel.bypassReport, items } as IBypassSheet;
        }
    };

    const onCreateReport = async () => {
        appStateModel.isLoading = true;
        const result = await uploadGoogleSheetUseCase();
        if (result?.spreadsheetId) {
            navigation.goBack();
        } else {
            Alert.alert('Something went wrong');
        }
        appStateModel.isLoading = false;
    };

    const onCreateLocalReport = async () => {
        await createLocalReport();
        navigation.goBack();
    };

    return { bypassReport, onCreateLocalReport, onChangeComment, onChangeRate, onAddPhoto, onDeletePhoto, onCreateReport, onChangeIsDone }
}

