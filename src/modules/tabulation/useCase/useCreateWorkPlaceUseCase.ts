import Toast from "react-native-toast-message";
import { IResponse } from "../../../../libs/requester/IRequester/IResponse";

import { companyService } from "../../shared/entities/company/CompanyService";
import { workPlaceModel } from "../../shared/entities/workPlace/WorkPlaceModel";
import { workPlaceService } from "../../shared/entities/workPlace/WorkPlaceService";

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

export const useCreateWorkPlaceUseCase = async (company_id: number, longitude: number, latitude: number, radius: number, name: string, address: string) => {
    try {
        const response = await workPlaceService.createWorkPlace(company_id, longitude, latitude, radius, name, address);        
        const result = processResponse(response.data);
        return result;
    } catch (error) {
        return { message: 'error' };
    };
};