import { IRestPost } from "../../../libs/requester";
import { ILinks } from "../../../src/config";
import { ISimpleTask } from "../../shared/entities/simpleTask/ISimpleTask";
import { IUpdateSimpleTaskRequest } from "../useCases/_ports/IUpdateSimpleTaskRequest";
import { IDeleteSimpleTaskRequest } from "../useCases/_ports/IDeleteSimpleTaskRequest";

export class SimpleTaskRequester implements IUpdateSimpleTaskRequest, IDeleteSimpleTaskRequest {
    constructor(private requestor: IRestPost, private links: ILinks) {

    }

    deleteSimpleTask = async (id: number) => {
        try {
            const response = await this.requestor.post(this.links.LINKS.DELETE_SIMPLE_TASK, { id });
            const result = this.processingResponse(response);
            return result;
        } catch (error) {
            console.warn('SimpleTaskRequester -> deleteSimpleTask: ', this.links.LINKS.DELETE_SIMPLE_TASK, { id }, error);
            return { isError: true, data: null, message: '' } as any;
        }
    };

    updateSimpleTask = async (item: ISimpleTask) => {
        try {
            const response = await this.requestor.post(this.links.LINKS.UPDATE_SIMPLE_TASK, item);
            const result = this.processingResponse(response);
            return result;
        } catch (error) {
            console.warn('SimpleTaskRequester -> updateSimpleTask: ', this.links.LINKS.UPDATE_SIMPLE_TASK, item, error);
            return { isError: true, data: null, message: '' } as any;
        }
    }

    private processingResponse = (response: any) => {
        let result = null;
        if (response?.status < 400) {
            result = { isError: false, data: response.data };
        } else if (Array.isArray(response?.invalidFields) && response.invalidFields.length) {
            console.warn('SimpleTaskRequester -> processingResponse: ', 'not valid fields');
            // TODO: validate response
            result = { isError: true, message: response?.messageKey || '' };
        } else {
            console.warn('SimpleTaskRequester -> processingResponse: ', response);
            result = { isError: true, message: response?.messageKey || '' };
        }
        return result;
    }

}
