import { useNavigation } from "@react-navigation/native"
import { useCallback } from "react";
import { googleSignInModule } from "../../../../libs/google/googleSignIn/GoogleSignInModule";
import { userModel } from "../../shared/entities/user/userModel";
import { StackNavigationProp } from "@react-navigation/stack";

export const useTabulation = () => {
    const navigation = useNavigation<StackNavigationProp<any>>();

    const onWorkShift = () => {
        navigation.navigate('WorkShiftView');
    }; 

    return { onWorkShift };
};