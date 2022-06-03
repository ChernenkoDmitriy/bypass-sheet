import { LayoutAnimation, NativeModules } from "react-native";
import { ICropedImage } from "../../../libs/imagePicker/IImagePicker/ICropedImage";
import { IBypassSheet } from "../../shared/entities/bypassList/IBypassSheet";
import { bypassReportModel } from "../../shared/entities/bypassReport/BypassReportModel"
import { createReport } from "../useCases/CreateReport";

const { UIManager } = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
    UIManager.setLayoutAnimationEnabledExperimental(true);

export const useBypassSheet = () => {
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

    const onCreateReport = () => {
        createReport()
    };

    return { bypassReport, onChangeComment, onChangeRate, onAddPhoto, onDeletePhoto, onCreateReport, onChangeIsDone }
}

