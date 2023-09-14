import { IRequester, requester } from "../../../libs/requester";
import { IFormDataRequest } from "../../../libs/requester/IRequester/IFormDataRequest";
import { IResponse } from "../../../libs/requester/IRequester/IResponse";
import { processingResponse } from "../../../libs/requester/processingResponse";
import { loggerModel } from "../../UIKit/logger/entity/loggerModel";
import { ILinks, links } from "../../utils/Links";

class WorkShiftService {
    constructor(
        private requester: IRequester & IFormDataRequest,
        private links: ILinks,
    ) { }

    createWorkShift = async (company_id: number, startTime: string, endTime: string, name: string): Promise<IResponse> => {
        try {
            const response = await this.requester.post(this.links.createWorkShift, { company_id, startTime, endTime, name });
            const result = processingResponse(response);
            return result;
        } catch (error) {
            loggerModel.add('error', 'WorkShiftService -> createWorkShift: ' + this.links.createWorkShift + { company_id, startTime, endTime, name }, JSON.stringify(error));
            console.warn('WorkShiftService -> createWorkShift: ', this.links.createWorkShift, { company_id, startTime, endTime, name }, error);
            return { isError: true, data: null, message: '' } as any;
        }
    }
    deleteWorkShift = async (id: number, company_id: number): Promise<IResponse> => {
        try {
            const response = await this.requester.delete(this.links.deleteWorkShift, { id, company_id });
            const result = processingResponse(response);
            return result;
        } catch (error) {
            loggerModel.add('error', 'WorkShiftService -> deleteWorkShift: ' + this.links.deleteWorkShift + { id, company_id }, JSON.stringify(error));
            console.warn('WorkShiftService -> deleteWorkShift: ', this.links.deleteWorkShift, { id, company_id }, error);
            return { isError: true, data: null, message: '' } as any;
        }
    }
    updateWorkShift = async (company_id: number, id: number, startTime: string, endTime: string, name: string, description: string): Promise<IResponse> => {
        try {
            const response = await this.requester.put(this.links.updateWorkShift, { company_id, id, startTime, endTime, name, description });
            const result = processingResponse(response);
            return result;
        } catch (error) {
            loggerModel.add('error', 'WorkShiftService -> updateWorkShift: ' + this.links.updateWorkShift + { company_id, id, startTime, endTime, name, description }, JSON.stringify(error));
            console.warn('WorkShiftService -> updateWorkShift: ', this.links.updateWorkShift, { company_id, id, startTime, endTime, name, description }, error);
            return { isError: true, data: null, message: '' } as any;
        }
    }
    getWorkShiftList = async (company_id: number): Promise<IResponse> => {
        try {
            const response = await this.requester.post(this.links.listWorkShift, { company_id });
            const result = processingResponse(response);
            return result;
        } catch (error) {
            loggerModel.add('error', 'WorkShiftService -> getWorkShiftList: ' + this.links.listWorkShift + { company_id }, JSON.stringify(error));
            console.warn('WorkShiftService -> getWorkShiftList: ', this.links.listWorkShift, { company_id }, error);
            return { isError: true, data: null, message: '' } as any;
        }
    }
}

export const workShiftService = new WorkShiftService(requester, links);