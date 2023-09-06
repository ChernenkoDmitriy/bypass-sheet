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

    getCompanyList = async (offset?: number, limit?: number): Promise<IResponse> => {
        try {
            const response = await this.requester.post(this.links.companyList, { offset });
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
            const result = processingResponse(response);
            return result;
        } catch (error) {
            loggerModel.add('error', 'CompanyService -> createCompany: ' + this.links.createCompany + { name }, JSON.stringify(error));
            console.warn('CompanyService -> createCompany: ', this.links.createCompany, { name }, error);
            return { isError: true, data: null, message: '' } as any;
        }
    }

    deleteCompany = async (company_id: number): Promise<IResponse> => {
        try {
            const response = await this.requester.delete(this.links.deleteCompany, { company_id });
            const result = processingResponse(response);
            return result;
        } catch (error) {
            loggerModel.add('error', 'CompanyService -> deleteCompany: ' + this.links.deleteCompany + { company_id }, JSON.stringify(error));
            console.warn('CompanyService -> deleteCompany: ', this.links.deleteCompany, { company_id }, error);
            return { isError: true, data: null, message: '' } as any;
        }
    }

    updateCompany = async (company_id: number, name: string, description: 'Description'): Promise<IResponse> => {
        try {
            const response = await this.requester.put(this.links.updateCompany, { company_id, name, description });
            const result = processingResponse(response);
            return result;
        } catch (error) {
            loggerModel.add('error', 'CompanyService -> updateCompany: ' + this.links.updateCompany + { company_id, name, description }, JSON.stringify(error));
            console.warn('CompanyService -> updateCompany: ', this.links.updateCompany, { company_id, name, description }, error);
            return { isError: true, data: null, message: '' } as any;
        }
    }

    addUser = async (company_id: number, members: number[]): Promise<IResponse> => {
        try {
            const response = await this.requester.post(this.links.addUser, { company_id, members });
            const result = processingResponse(response);
            return result;
        } catch (error) {
            loggerModel.add('error', 'CompanyService -> updateCompany: ' + this.links.addUser + { company_id, members }, JSON.stringify(error));
            console.warn('CompanyService -> updateCompany: ', this.links.addUser, { company_id, members }, error);
            return { isError: true, data: null, message: '' } as any;
        }
    }
    getUserList = async (offset?: number, search?: string, limit?: number): Promise<IResponse> => {
        try {
            const response = await this.requester.post(this.links.userList, { offset, search });
            const result = processingResponse(response);
            return result;
        } catch (error) {
            loggerModel.add('error', 'CompanyService -> getUserList: ' + this.links.userList + { offset, search }, JSON.stringify(error));
            console.warn('CompanyService -> getUserList: ', this.links.userList, { offset, search }, error);
            return { isError: true, data: null, message: '' } as any;
        }
    }

    acceptInvite = async (company_id: number, isAccept: boolean): Promise<IResponse> => {
        try {
            const response = await this.requester.post(this.links.acceptInvite, { company_id, isAccept });
            const result = processingResponse(response);
            return result;
        } catch (error) {
            loggerModel.add('error', 'CompanyService -> acceptInvite: ' + this.links.acceptInvite + { company_id, isAccept }, JSON.stringify(error));
            console.warn('CompanyService -> acceptInvite: ', this.links.acceptInvite, { company_id, isAccept }, error);
            return { isError: true, data: null, message: '' } as any;
        }
    }

    getMembers = async (company_id: number): Promise<IResponse> => {
        try {
            const response = await this.requester.post(this.links.getMembers, { company_id });
            const result = processingResponse(response);
            return result;
        } catch (error) {
            loggerModel.add('error', 'CompanyService -> getMembers: ' + this.links.getMembers + { company_id }, JSON.stringify(error));
            console.warn('CompanyService -> getMembers: ', this.links.getMembers, { company_id }, error);
            return { isError: true, data: null, message: '' } as any;
        }
    }

    deleteMember = async (company_id: number, user_id: number): Promise<IResponse> => {
        try {
            const response = await this.requester.delete(this.links.deleteMember, { company_id, user_id });
            const result = processingResponse(response);
            return result;
        } catch (error) {
            loggerModel.add('error', 'CompanyService -> getMembers: ' + this.links.deleteMember + { company_id, user_id }, JSON.stringify(error));
            console.warn('CompanyService -> getMembers: ', this.links.deleteMember, { company_id, user_id }, error);
            return { isError: true, data: null, message: '' } as any;
        }
    }
}
export const companyService = new CompanyService(requester, links);