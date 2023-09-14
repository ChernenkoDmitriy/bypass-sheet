import Toast from "react-native-toast-message";
import { IResponse } from "../../../../libs/requester/IRequester/IResponse";
import { companyService } from "../../../entities/company/CompanyService";
import { userModel } from "../../../entities/user/userModel";

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

export const useGetUserListUseCase = async (offset?: 0, search?: string) => {
    try {
        const response = await companyService.getUserList(offset, search);
        userModel.userList = response.data.data;
        const result = processResponse(response.data);
        return result;
    } catch (error) {
        return { message: 'error' };
    };
};