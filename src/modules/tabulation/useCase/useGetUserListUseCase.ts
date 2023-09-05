import Toast from "react-native-toast-message";
import { IResponse } from "../../../../libs/requester/IRequester/IResponse";
import { workShiftService } from "../../shared/entities/workShift/WorkShiftService";
import { appStateModel } from "../../shared/entities/appState/AppStateModel";
import { workShiftModel } from "../../shared/entities/workShift/WorkShiftModel";
import { userModel } from "../../shared/entities/user/userModel";
import { userService } from "../../shared/entities/user/userService";

const processResponse = (response: IResponse) => {
    if (response.data.message) {
        Toast.show({
            type: 'error',
            text1: 'error',
            text2: response.data.message,
            visibilityTime: 5000,
        });
        return { message: response.data.message };
    };
    return { message: '' };
};

export const useGetUserListUseCase = async (offset: number | 0) => {
    try {
        appStateModel.isLoading = true;
        const response = await userService.getUserList(offset);
        userModel.userList = response.data.data;
        const result = processResponse(response.data);
        return result;
    } catch (error) {
        return { message: 'error' };
    } finally {
        appStateModel.isLoading = false;
    };
};