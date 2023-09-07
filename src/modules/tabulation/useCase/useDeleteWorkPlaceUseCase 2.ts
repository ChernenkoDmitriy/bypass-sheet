import Toast from "react-native-toast-message";
import { IResponse } from "../../../../libs/requester/IRequester/IResponse";
import { workShiftService } from "../../shared/entities/workShift/WorkShiftService";
import { appStateModel } from "../../shared/entities/appState/AppStateModel";
import { workShiftModel } from "../../shared/entities/workShift/WorkShiftModel";
import { workPlaceService } from "../../shared/entities/workPlace/WorkPlaceService";
import { workPlaceModel } from "../../shared/entities/workPlace/WorkPlaceModel";

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

export const useDeleteWorkPlaceUseCase = async (id: number, company_id: number ) => {
    try {
        appStateModel.isLoading = true;
        const response = await workPlaceService.deleteWorkPlace(id, company_id);
        const result = processResponse(response.data);
        return result;
    } catch (error) {
        return { message: 'error' };
    } finally {
        appStateModel.isLoading = false;
    };
};