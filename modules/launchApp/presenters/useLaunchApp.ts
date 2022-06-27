import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { EasingNode, timing, useValue } from "react-native-reanimated";

export const useLaunchApp = () => {
    const animValue = useValue(0);
    const navigation = useNavigation<any>();

    useEffect(() => {
        timing(animValue, { toValue: 1, duration: 1000, easing: EasingNode.linear }).start();
        setTimeout(() => {
            navigation.replace('BypassSheetListView');
        }, 1500);
    }, []);

    return { animValue };

}
