import Toast from "react-native-toast-message";
import { useUiContext } from "../../../UIProvider";

export const useShowToast = () => {
    const { colors } = useUiContext();

    const showSuccess = (text1: string, text2?: string, visibilityTime?: number) => {
        Toast.show({
            type: 'success',
            text1: text1,
            text2: text2,
            visibilityTime: visibilityTime,
            autoHide: true,
            topOffset: 50,
            bottomOffset: 50,
            props: { colors },
        });
    };

    const showError = (text1: string, text2?: string) => {
        Toast.show({
            type: 'error',
            text1: text1,
            text2: text2,
            visibilityTime: 4000,
            autoHide: true,
            topOffset: 50,
            bottomOffset: 50,
            props: { colors }
        });
    };
    return { showError, showSuccess };
};