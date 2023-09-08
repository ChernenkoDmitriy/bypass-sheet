import { IRequester, requester } from "../../../../../libs/requester";
import { IFormDataRequest } from "../../../../../libs/requester/IRequester/IFormDataRequest";
import { IResponse } from "../../../../../libs/requester/IRequester/IResponse";
import { processingResponse } from "../../../../../libs/requester/processingResponse";
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
            const result = processingResponse(response);
            return result;
        } catch (error) {
            loggerModel.add('error', 'AuthorizationService -> login: ' + this.links.login + { phone, password }, JSON.stringify(error));
            console.warn('AuthorizationService -> login: ', this.links.login, { phone, password }, error);
            return { isError: true, data: null, message: '' } as any;
        }
    }

    registration = async (first_name: string, last_name: string, phone: string, password: string): Promise<IResponse> => {
        try {
            const response = await this.requester.post(this.links.registration, { first_name, last_name, phone, password });
            console.log('response', response);
            const result = processingResponse(response);
            return result;
        } catch (error) {
            loggerModel.add('error', 'AuthorizationService -> registration: ' + this.links.registration + { first_name, last_name, phone, password }, JSON.stringify(error));
            console.warn('AuthorizationService -> registration: ', this.links.registration, { first_name, last_name, phone, password }, error);
            return { isError: true, data: null, message: '' } as any;
        }
    }
}

export const authorizationService = new AuthorizationService(requester, links);