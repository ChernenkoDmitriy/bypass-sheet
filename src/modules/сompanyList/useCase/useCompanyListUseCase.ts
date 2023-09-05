import { IResponse } from "../../../../libs/requester/IRequester/IResponse";
import { companyModel } from "../../shared/entities/company/CompanyModel";
import { companyService } from "../../shared/entities/company/CompanyService";
import Toast from "react-native-toast-message";

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
    companyModel.companyList = response.data
    return { message: '' };
};

export const useCompanyListUseCase = async (offset: number) => {
    try {
        const response = await companyService.getCompanyList(offset);
        const result = processResponse(response.data);
        return result;
    } catch (error) {
        return { message: 'error' };
    } finally {
    };
};