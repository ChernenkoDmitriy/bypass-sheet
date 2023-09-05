import { IRequester, requester } from "../../../../../libs/requester";
import { IFormDataRequest } from "../../../../../libs/requester/IRequester/IFormDataRequest";
import { IResponse } from "../../../../../libs/requester/IRequester/IResponse";
import { processingResponse } from "../../../../../libs/requester/processingResponse";
import { loggerModel } from "../../../../UIKit/logger/entity/loggerModel";
import { ILinks, links } from "../../../../utils/Links";

class UserService {
    constructor(
        private requester: IRequester & IFormDataRequest,
        private links: ILinks,
    ) { }

    getUserList = async (offset: number, limit?: number): Promise<IResponse> => {
        try {
            const response = await this.requester.post(this.links.userList, { offset });
            const result = processingResponse(response);
            return result;
        } catch (error) {
            loggerModel.add('error', 'UserService -> getUserList: ' + this.links.userList + { offset }, JSON.stringify(error));
            console.warn('UserService -> getUserList: ', this.links.userList, { offset }, error);
            return { isError: true, data: null, message: '' } as any;
        }
    }
}

export const userService = new UserService(requester, links);