import { IResponse } from "../../../../libs/requester/IRequester/IResponse";
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
    return { message: '' };
};

export const useUpdateCompanyUseCase = async (id: number, name: string, description: 'Description') => {
    try {
        const response = await companyService.updateCompany(id , name , description);
        const result = processResponse(response.data);
        return result;
    } catch (error) {
        return { message: 'error' };
    } finally {
    };
};