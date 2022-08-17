import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { EasingNode, timing, useValue } from "react-native-reanimated";
import { googleSignInModule } from "../../../libs/google/googleSignIn/GoogleSignInModule";
import { userModel } from "../../shared/entities/user/userModel";

export const useLaunchApp = () => {
    const animValue = useValue(0);
    const navigation = useNavigation<any>();
    
    useEffect(() => {
        if (userModel?.user) {
            googleSignInModule.getTokens().then((tokens) => {
                userModel.tokens = tokens;
            });
        }
    }, [userModel.user])

    useEffect(() => {
        timing(animValue, { toValue: 1, duration: 1000, easing: EasingNode.linear }).start();
        setTimeout(() => {
            navigation.replace('DashboardView');
        }, 1500);
    }, []);

    return { animValue };

}
