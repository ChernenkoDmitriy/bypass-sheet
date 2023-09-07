import { IRequester, requester } from "../../../../../libs/requester";
import { IFormDataRequest } from "../../../../../libs/requester/IRequester/IFormDataRequest";
import { IResponse } from "../../../../../libs/requester/IRequester/IResponse";
import { processingResponse } from "../../../../../libs/requester/processingResponse";
import { loggerModel } from "../../../../UIKit/logger/entity/loggerModel";
import { ILinks, links } from "../../../../utils/Links";

class WorkPlaceService {
    constructor(
        private requester: IRequester & IFormDataRequest,
        private links: ILinks,
    ) { }

    createWorkPlace = async (company_id: number, longitude: number, latitude: number, radius: number, name: string, address: string): Promise<IResponse> => {
        try {
            const response = await this.requester.post(this.links.createWorkPlace, { company_id, longitude, latitude, radius, name, address });
            console.log(response);

            const result = processingResponse(response);
            return result;
        } catch (error) {
            loggerModel.add('error', 'WorkPlaceService -> createWorkPlace: ' + this.links.createWorkPlace + { company_id, longitude, latitude, radius, name, address }, JSON.stringify(error));
            console.warn('WorkPlaceService -> createWorkPlace: ', this.links.createWorkPlace, { company_id, longitude, latitude, radius, name, address }, error);
            return { isError: true, data: null, message: '' } as any;
        }
    }

    deleteWorkPlace = async (id: number, company_id: number): Promise<IResponse> => {
        try {
            const response = await this.requester.delete(this.links.deleteWorkPlace, { id, company_id });            
            const result = processingResponse(response);
            return result;
        } catch (error) {
            loggerModel.add('error', 'WorkPlaceService -> deleteWorkPlace: ' + this.links.deleteWorkPlace + { id, company_id }, JSON.stringify(error));
            console.warn('WorkPlaceService -> deleteWorkPlace: ', this.links.deleteWorkPlace, { id, company_id }, error);
            return { isError: true, data: null, message: '' } as any;
        }
    }

    updateWorkPlace = async (id: number, company_id: number, longitude: number, latitude: number, radius: number, name: string, address: string): Promise<IResponse> => {
        try {
            const response = await this.requester.put(this.links.updateWorkPlace, {id, company_id, longitude, latitude, radius, name, address });
            const result = processingResponse(response);
            return result;
        } catch (error) {
            loggerModel.add('error', 'WorkPlaceService -> updateWorkPlace: ' + this.links.updateWorkPlace + {id, company_id, longitude, latitude, radius, name, address }, JSON.stringify(error));
            console.warn('WorkPlaceService -> updateWorkPlace: ', this.links.updateWorkPlace, {id, company_id, longitude, latitude, radius, name, address }, error);
            return { isError: true, data: null, message: '' } as any;
        }
    }

    getWorkPlaceList = async (company_id: number): Promise<IResponse> => {
        try {
            const response = await this.requester.post(this.links.getWorkPlaceList, {company_id });
            const result = processingResponse(response);
            return result;
        } catch (error) {
            loggerModel.add('error', 'WorkPlaceService -> getWorkPlaceList: ' + this.links.getWorkPlaceList + {company_id }, JSON.stringify(error));
            console.warn('WorkPlaceService -> getWorkPlaceList: ', this.links.getWorkPlaceList, { company_id }, error);
            return { isError: true, data: null, message: '' } as any;
        }
    }
}
export const workPlaceService = new WorkPlaceService(requester, links);