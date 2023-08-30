import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";

export const useLaunchApp = () => {
    const navigation = useNavigation<any>();

    useEffect(() => {
        setTimeout(() => {
            navigation.replace('DashboardView');
        }, 1500);
    }, []);
};
