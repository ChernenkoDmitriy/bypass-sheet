import { useNavigation } from "@react-navigation/native";
import { useCallback } from "react";
import { Alert } from "react-native";
import { googlePhotosModule } from "../../../libs/google/googlePhotos/GooglePhotosModule";
import { googleSignInModule } from "../../../libs/google/googleSignIn/GoogleSignInModule";
import { bypassListModel } from "../../shared/entities/bypassList/BypassListModel";
import { IBypassCompany } from "../../shared/entities/bypassList/IBypassCompany";
import { IBypassSheet } from "../../shared/entities/bypassList/IBypassSheet";
import { bypassReportModel } from "../../shared/entities/bypassReport/BypassReportModel";

export const useBypassSheetList = () => {
    const navigation = useNavigation<any>();
    const bypassList = bypassListModel.bypassList;

    const onGoCreateBypassCompany = () => {
        // navigation.navigate('BypassCompanyView');
        // googleSignInModule.signOut().then(data => console.log(data))
        // googleSignInModule.getTokens().then(data => console.log(data))
        // googleSignInModule.signIn().then(data => console.log(data))
        // // googleSignInModule.isSignedIn().then(data => console.log(data))
        // // googleSignInModule.getCurrentUser().then(data => console.log(data))
        const token = 'ya29.a0ARrdaM8ReZJVog4C5zMYGoT4Qq4WKVeZnjEkgTxheJCoHFufiT-Fvvt6xNq_X7JbfDESK4RBFKFSRUjnJPSGK9_4w_tVtW8wgd_biQXJUr6ZydDrT0THAoICOJMuOBxRARcc9Rd9Yr7SgNdBVgfVln4kU0Vn';
        googlePhotosModule.setAccessToken(token);
        // // googlePhotosModule.createAlbum('test');
        // // googlePhotosModule.getUploadToken('test');
        googlePhotosModule.uploadPhoto('');
    };

    const onChoseItem = (item: IBypassSheet) => {
        bypassReportModel.bypassReport = item;
        navigation.navigate('BypassSheetView');
    };

    const onDeleteCompany = useCallback((id: number) => {
        const companies = bypassListModel.bypassList.filter((item) => item.id !== id);
        bypassListModel.bypassList = companies;
    }, []);

    const onEditCompany = useCallback((item: IBypassCompany) => {
        navigation.navigate('BypassCompanyView', { company: item });
    }, []);

    return { bypassList, onDeleteCompany, onGoCreateBypassCompany, onChoseItem, onEditCompany }
}