import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { userModel } from "../../shared/entities/user/userModel";

export const useLaunchApp = () => {
    const navigation = useNavigation<any>();

    useEffect(() => {
        setTimeout(() => {
            if (userModel.user) {
                navigation.reset({ index: 0, routes: [{ name: 'CompanyListView' }] });
            } else {
                navigation.reset({ index: 0, routes: [{ name: 'AuthorizationView' }] });
            };
        }, 1500);
    }, []);
};