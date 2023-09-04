import { useMemo, useState } from "react";
import { useUiContext } from "../../../UIProvider";
import { userModel } from "../../shared/entities/user/userModel";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

export const UseSetting = () => {
    const { theme, t, locale, saveTheme } = useUiContext();
    const isEnabled = theme === 'dark';
    const navigation = useNavigation<StackNavigationProp<any>>();
    const activeLanguage = useMemo(() => locale === 'en' ? t('english') : t('ukrainian'), [locale]);
    const activeTheme = useMemo(() => theme === 'dark' ? t('dark') : t('light'), [theme]);
    
    const handleTheme = () => saveTheme(theme === "light" ? 'dark' : 'light');

    const LogOut = () => {
        userModel.clear();
        navigation.reset({
            index: 0,
            routes: [{ name: 'AuthorizationView' }],
        });
    };

    const getSelectLanguage = () => {
        navigation.navigate('SelectLanguageView');
    };

    return { isEnabled, activeLanguage, activeTheme, handleTheme, LogOut, getSelectLanguage }
};