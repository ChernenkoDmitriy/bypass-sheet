import { useMemo, useState } from "react";
import { useUiContext } from "../../../UIProvider";
import { userModel } from "../../shared/entities/user/userModel";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

export const UseSetting = () => {
    const { theme, t, setLocale, saveTheme } = useUiContext();
    const [isReminderOn, onSetIsReminderOn] = useState(false);
    const isEnabled = theme === 'dark';
    const selectedLanguage = useMemo(() => isReminderOn ? 'EN' : 'UA', [isReminderOn]);
    const navigation = useNavigation<StackNavigationProp<any>>();

    const handleLocaleChange = (isEn: boolean) => {
        const locale = isEn ? 'en' : 'uk';
        setLocale(locale);
        onSetIsReminderOn(isEn);
    };

    const handleTheme = () => {
        saveTheme(theme === "light" ? 'dark' : 'light');
    };

    const LogOut = () => {
        userModel.clear();
        navigation.navigate('AuthorizationView');
    };

    return { isReminderOn, isEnabled, selectedLanguage, handleTheme, handleLocaleChange, LogOut }
};