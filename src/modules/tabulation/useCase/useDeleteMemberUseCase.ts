import Toast from "react-native-toast-message";
import { IResponse } from "../../../../libs/requester/IRequester/IResponse";

import { companyService } from "../../shared/entities/company/CompanyService";

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

export const useDeleteMemberUseCase = async (company_id: number, user_id: number) => {
    try {
        const response = await companyService.deleteMember(company_id, user_id);
        const result = processResponse(response.data);
        return result;
    } catch (error) {
        return { message: 'error' };
    };
};