import { IRequester, requester } from "../../../libs/requester";
import { IFormDataRequest } from "../../../libs/requester/IRequester/IFormDataRequest";
import { IResponse } from "../../../libs/requester/IRequester/IResponse";
import { processingResponse } from "../../../libs/requester/processingResponse";
import { loggerModel } from "../../UIKit/logger/entity/loggerModel";
import { ILinks, links } from "../../utils/Links";

class TimeSheetService {
    constructor(
        private requester: IRequester & IFormDataRequest,
        private links: ILinks,
    ) { }

    timeSheetListUser = async (company_id: number, startTime: number, endTime: number): Promise<IResponse> => {
        try {
            const response = await this.requester.post(this.links.timeSheetListUser, { company_id, startTime, endTime });
            const result = processingResponse(response);
            return result;
        } catch (error) {
            loggerModel.add('error', 'TimeSheetService -> timeSheetListUser: ' + this.links.timeSheetListUser + { company_id, startTime, endTime }, JSON.stringify(error));
            console.warn('TimeSheetService -> timeSheetListUser: ', this.links.timeSheetListUser, { company_id, startTime, endTime }, error);
            return { isError: true, data: null, message: '' } as any;
        }
    }

    timeSheetListAdmin = async (company_id: number, user_id: number, startTime: number, endTime: number): Promise<IResponse> => {
        try {
            const response = await this.requester.post(this.links.timeSheetListAdmin, { company_id, user_id, startTime, endTime });
            const result = processingResponse(response);
            return result;
        } catch (error) {
            loggerModel.add('error', 'TimeSheetService -> timeSheetListAdmin: ' + this.links.timeSheetListAdmin + { company_id, user_id, startTime, endTime }, JSON.stringify(error));
            console.warn('TimeSheetService -> timeSheetListAdmin: ', this.links.timeSheetListAdmin, { company_id, user_id, startTime, endTime }, error);
            return { isError: true, data: null, message: '' } as any;
        }
    }
}
export const timeSheetService = new TimeSheetService(requester, links);