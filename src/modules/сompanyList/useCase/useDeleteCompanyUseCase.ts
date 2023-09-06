import { IResponse } from "../../../../libs/requester/IRequester/IResponse";
import { appStateModel } from "../../shared/entities/appState/AppStateModel";
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

export const useDeleteCompanyUseCase = async (id: number) => {
    try {
        appStateModel.isLoading = true;
        const response = await companyService.deleteCompany(id);
        const result = processResponse(response.data.settings);
        return result;
    } catch (error) {
        return { message: 'error' };
    } finally {
        appStateModel.isLoading = false;
    };
};