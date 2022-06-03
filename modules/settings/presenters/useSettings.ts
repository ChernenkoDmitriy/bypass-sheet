import { useNavigation } from "@react-navigation/native"
import { useCallback } from "react";
import { settingModel } from "../../shared/entities/settings/SettingsModel";
import { userModel } from "../../shared/entities/user/User";

export const useSettings = () => {
    const navigation = useNavigation<any>();

    const onGoBack = useCallback(() => { navigation.goBack() }, []);

    const onChangeLanguage = useCallback((value: string) => settingModel.setLanguage(value), []);

    const onChangeTheme = useCallback((value: 'light' | 'dark') => settingModel.setColorTheme(value), []);

    const onSignOut = useCallback(() => {
        userModel.user = null;
        navigation.reset({ index: 0, routes: [{ name: 'AuthorizationView' }], });
    }, []);

    return { onGoBack, onChangeLanguage, onChangeTheme, onSignOut };
}
