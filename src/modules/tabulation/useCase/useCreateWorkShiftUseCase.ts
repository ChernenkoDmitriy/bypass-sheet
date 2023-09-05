import Toast from "react-native-toast-message";
import { IResponse } from "../../../../libs/requester/IRequester/IResponse";
import { workShiftService } from "../../shared/entities/workShift/WorkShiftService";
import { appStateModel } from "../../shared/entities/appState/AppStateModel";
import { workShiftModel } from "../../shared/entities/workShift/WorkShiftModel";

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
    workShiftModel.workShift = response.data
    return { message: '' };
};

export const useCreateWorkShiftUseCase = async (company_id: number, startTime: string, endTime: string, name: string) => {
    try {
        appStateModel.isLoading = true;
        const response = await workShiftService.createWorkShift(company_id, startTime, endTime, name);
        const result = processResponse(response.data);
        return result;
    } catch (error) {
        return { message: 'error' };
    } finally {
        appStateModel.isLoading = false;
    };
};