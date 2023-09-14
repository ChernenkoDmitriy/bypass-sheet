import { IRequester, requester } from "../../../libs/requester";
import { IFormDataRequest } from "../../../libs/requester/IRequester/IFormDataRequest";
import { ILinks, links } from "../../utils/Links";


class MembersService {
    constructor(
        private requester: IRequester & IFormDataRequest,
        private links: ILinks,
    ) { }

   
}
export const membersService = new MembersService(requester, links);