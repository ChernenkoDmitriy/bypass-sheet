import { IResponse } from "./IRequester/IResponse";

export const processingResponse = (response: any): IResponse => {
    let result: any = { isError: true, message: '' };
    if (response?.status < 400) {
        result = { isError: false, data: response.data, message: '' };
    } else if (response?.data?.error === 'validation') {
        result = { isError: true, message: response?.data?.messages };
    } else {
        result = { isError: true, message: response?.data?.messages || response?.data?.message };
    }
    return result;
}