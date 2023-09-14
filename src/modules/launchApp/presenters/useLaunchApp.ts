import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { companyModel } from "../../../entities/company/CompanyModel";
import { userModel } from "../../../entities/user/userModel";

export const useLaunchApp = () => {
    const navigation = useNavigation<any>();

    useEffect(() => {
        setTimeout(() => {
            if (userModel.user) {
                if (companyModel.chosenCompany === null) {
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