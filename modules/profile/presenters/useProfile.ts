import { useNavigation } from "@react-navigation/native"
import { useCallback } from "react";
import { googleSignInModule } from "../../../libs/google/googleSignIn/GoogleSignInModule";
import { userModel } from "../../shared/entities/user/userModel";

export const useProfile = () => {
    const navigation = useNavigation<any>();

    const onGoBack = useCallback(() => { navigation.goBack() }, []);

    const onSignOut = useCallback(async () => {
        userModel.clear();
        await googleSignInModule.signOut();
        navigation.goBack();
    }, []);

    const onSignIn = useCallback(async () => {
        if (userModel.user) {
            navigation.navigate('ProfileView');
        } else {
            const user = await googleSignInModule.signIn();
            if (user?.user) {
                userModel.user = user.user;
                const tokens = await googleSignInModule.getTokens();
                userModel.tokens = tokens;
            }
        }
    }, [userModel.user]);

    const onChangeGoogleSheetId = (value: string) => {
        userModel.googleSheet.sheetId = value;
    }

    const onChangeGoogleSheetName = (value: string) => {
        userModel.googleSheet.sheetName = value;
    }

    return { onGoBack, onSignOut, onSignIn, onChangeGoogleSheetId, onChangeGoogleSheetName };
}
