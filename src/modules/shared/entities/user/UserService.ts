import { IRequester, requester } from "../../../../../libs/requester";
import { IResponse } from "../../../../../libs/requester/IRequester/IResponse";
import { ILinks, links } from "../../../../utils/Links";
import { config } from "../../../../utils/config";
import { IUser } from "./IUser";

class UserService {
    constructor(
        private requester: IRequester,
        private links: ILinks,
    ) { }


    getLocationDetails = async (latlng: string, language: string) => {
        try {
            const response = await this.requester.get(this.links.getLocaleDetails, { latlng, key: config.googleMapsAPIKey , language,});
            const result = this.processingResponse(response);
            return result;
        } catch (error) {
            console.warn('UserService -> getLocationDetails: ', this.links.getLocaleDetails, error);
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
            result = { isError: true, message: response?.data?.messages || response?.data?.error_message };
        }
        return result;
    }
}

export const userService = new UserService(requester, links);