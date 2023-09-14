import Toast from "react-native-toast-message";
import { IResponse } from "../../../../libs/requester/IRequester/IResponse";
import { appStateModel } from "../../../entities/appState/AppStateModel";
import { workShiftService } from "../../../entities/workShift/WorkShiftService";

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

export const useDeleteWorkShiftUseCase = async (id: number, company_id: number | 0) => {
    try {
        appStateModel.isLoading = true;
        const response = await workShiftService.deleteWorkShift(id, company_id);
        const result = processResponse(response.data);
        return result;
    } catch (error) {
        return { message: 'error' };
    } finally {
        appStateModel.isLoading = false;
    };
};