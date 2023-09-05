import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { userModel } from "../../shared/entities/user/userModel";
import { companyModel } from "../../shared/entities/company/CompanyModel";

export const useLaunchApp = () => {
    const navigation = useNavigation<any>();

    useEffect(() => {
        setTimeout(() => {
            if (userModel.user) {
                if (companyModel.chosenCompany) {
                    navigation.reset({ index: 0, routes: [{ name: 'TabNavigator' }] });
                } else {
                    navigation.reset({ index: 0, routes: [{ name: 'CompanyListView' }] });
                };
            } else {
                navigation.reset({ index: 0, routes: [{ name: 'AuthorizationView' }] });
            };
        }, 1500);
    }, []);
};