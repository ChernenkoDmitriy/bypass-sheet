import { IRequester, requester } from "../../../../../libs/requester";
import { IFormDataRequest } from "../../../../../libs/requester/IRequester/IFormDataRequest";
import { IResponse } from "../../../../../libs/requester/IRequester/IResponse";
import { processingResponse } from "../../../../../libs/requester/processingResponse";
import { loggerModel } from "../../../../UIKit/logger/entity/loggerModel";
import { ILinks, links } from "../../../../utils/Links";

class CompanyService {
    constructor(
        private requester: IRequester & IFormDataRequest,
        private links: ILinks,
    ) { }

    getCompanyList = async (offset: number, limit?: number): Promise<IResponse> => {
        try {
            const response = await this.requester.post(this.links.companyList, { offset });
            console.log('response', response);
            const result = processingResponse(response);
            return result;
        } catch (error) {
            loggerModel.add('error', 'CompanyService -> getCompanyList: ' + this.links.companyList + { offset }, JSON.stringify(error));
            console.warn('CompanyService -> getCompanyList: ', this.links.login, { offset }, error);
            return { isError: true, data: null, message: '' } as any;
        }
    }

    createCompany = async (name: string): Promise<IResponse> => {
        try {
            const response = await this.requester.post(this.links.createCompany, { name });
            console.log('response', response);
            const result = processingResponse(response);
            return result;
        } catch (error) {
            loggerModel.add('error', 'CompanyService -> createCompany: ' + this.links.createCompany + { name }, JSON.stringify(error));
            console.warn('CompanyService -> createCompany: ', this.links.createCompany, { name }, error);
            return { isError: true, data: null, message: '' } as any;
        }
    }

    deleteCompany = async (id: number): Promise<IResponse> => {
        try {
            const response = await this.requester.delete(this.links.deleteCompany, { id });
            const result = processingResponse(response);
            return result;
        } catch (error) {
            loggerModel.add('error', 'CompanyService -> deleteCompany: ' + this.links.deleteCompany + { id }, JSON.stringify(error));
            console.warn('CompanyService -> deleteCompany: ', this.links.deleteCompany, { id }, error);
            return { isError: true, data: null, message: '' } as any;
        }
    }

    updateCompany = async (id: number, name: string , description:'Description'): Promise<IResponse> => {
        try {
            const response = await this.requester.put(this.links.updateCompany, { id , name , description });
            const result = processingResponse(response);
            return result;
        } catch (error) {
            loggerModel.add('error', 'CompanyService -> updateCompany: ' + this.links.updateCompany + { id , name , description}, JSON.stringify(error));
            console.warn('CompanyService -> updateCompany: ', this.links.updateCompany, { id , name , description }, error);
            return { isError: true, data: null, message: '' } as any;
        }
    }
}

export const companyService = new CompanyService(requester, links);