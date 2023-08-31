import { IResponse } from "../../../../libs/requester/IRequester/IResponse";
import { appStateModel } from "../../shared/entities/appState/AppStateModel";
import { authorizationService } from "../../shared/entities/authorization/AuthorizationService";
import { userModel } from "../../shared/entities/user/userModel";
import Toast from "react-native-toast-message";

const processResponse = (response: IResponse) => {
    if (response.error) {
        Toast.show({
            type: 'error',
            text1: 'error',
            text2: response.messageKey,
            visibilityTime: 5000,
        });
        return { message: response.messageKey };
    };
    userModel.user = response.data;
    return { message: '' };
};

export const registrationUseCase = async (first_name: string, last_name: string, phone: string, password: string) => {
    try {
        appStateModel.isLoading = true;
        const response = await authorizationService.registration(first_name, last_name, phone, password);
        const result = processResponse(response);
        return result;
    } catch (error) {
        return { message: 'error' };
    } finally {
        appStateModel.isLoading = false;
    };
};