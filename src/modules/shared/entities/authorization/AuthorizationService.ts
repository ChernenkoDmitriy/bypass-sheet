import { IRequester, requester } from "../../../../../libs/requester";
import { IFormDataRequest } from "../../../../../libs/requester/IRequester/IFormDataRequest";
import { IResponse } from "../../../../../libs/requester/IRequester/IResponse";
import { loggerModel } from "../../../../UIKit/logger/entity/loggerModel";
import { ILinks, links } from "../../../../utils/Links";

class AuthorizationService {
    constructor(
        private requester: IRequester & IFormDataRequest,
        private links: ILinks,
    ) { }

    login = async (phone: string, password: string): Promise<IResponse> => {
        try {
            const response = await this.requester.post(this.links.login, { phone, password });
            const result = this.processingResponse(response);
            return result;
        } catch (error) {
            loggerModel.add('error', 'AuthorizationService -> verifyCode: ' + this.links.login + { phone, password }, JSON.stringify(error));
            console.warn('AuthorizationService -> verifyCode: ', this.links.login, { phone, password }, error);
            return { isError: true, data: null, message: '' } as any;
        }
    }

    registration = async (first_name: string, last_name: string, phone: string, password: string): Promise<IResponse> => {
        try {
            const response = await this.requester.post(this.links.registration, { first_name, last_name, phone, password });
            const result = this.processingResponse(response);
            return result;
        } catch (error) {
            loggerModel.add('error', 'AuthorizationService -> verifyCode: ' + this.links.registration + { first_name, last_name, phone, password }, JSON.stringify(error));
            console.warn('AuthorizationService -> verifyCode: ', this.links.registration, { first_name, last_name, phone, password }, error);
            return { isError: true, data: null, message: '' } as any;
        }
    }

    private processingResponse = (response: any): IResponse => {
        let result: any = { isError: true, message: '' };
        if (response?.status < 400) {
            result = { isError: false, data: response.data, message: '' };
        } else if (response?.data?.error === 'validation') {
            result = { isError: true, message: response?.data?.messages };
        } else {
            result = { isError: true, message: response?.data?.messages || response?.data?.message };
        }
        return result;
    }
}

export const authorizationService = new AuthorizationService(requester, links);