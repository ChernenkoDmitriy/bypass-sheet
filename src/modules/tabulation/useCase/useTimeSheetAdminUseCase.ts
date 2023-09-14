import Toast from "react-native-toast-message";
import { IResponse } from "../../../../libs/requester/IRequester/IResponse";

import { companyService } from "../../shared/entities/company/CompanyService";
import { timeSheetModel } from "../../shared/entities/timeSheet/TimeSheetModel";
import { timeSheetService } from "../../shared/entities/timeSheet/TimeSheetService";

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

export const useTimeSheetAdminUseCase = async (company_id: number, user_id: number, startTime: number, endTime: number) => {
    try {
        const response = await timeSheetService.timeSheetListAdmin(company_id, user_id, startTime, endTime);
        timeSheetModel.timeSheetList = response.data;
        const result = processResponse(response.data);
        return result;
    } catch (error) {
        return { message: 'error' };
    };
};