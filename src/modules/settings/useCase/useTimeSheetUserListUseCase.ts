import Toast from "react-native-toast-message";
import { IResponse } from "../../../../libs/requester/IRequester/IResponse";

import { companyService } from "../../shared/entities/company/CompanyService";
import { timeSheetService } from "../../shared/entities/timeSheet/TimeSheetService";
import { timeSheetModel } from "../../shared/entities/timeSheet/TimeSheetModel";

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

export const useTimeSheetUserListUseCase = async (company_id: number, startTime: number, endTime: number) => {
    try {
        const response = await timeSheetService.timeSheetListUser(company_id, startTime, endTime);
        timeSheetModel.timeSheetListUser = response.data;
        const result = processResponse(response.data);
        return result;
    } catch (error) {
        return { message: 'error' };
    };
};