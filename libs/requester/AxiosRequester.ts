import Axios from "axios";
import { IRequester } from ".";
import { userModel } from "../../modules/shared/entities/user/User";

export class AxiosRequester implements IRequester {
    private static instance: AxiosRequester;

    constructor() {
        if (AxiosRequester.instance) {
            return AxiosRequester.instance;
        }
        AxiosRequester.instance = this;
    }

    postFormData = async (url: string, data: FormData) => {
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: { 'Accept': '*/*', 'Content-Type': 'multipart/form-data', 'authorization': `Bearer ${userModel?.token}` },
                body: data,
            });
            const result = await response.json()
            return { data: result, status: response.status };
        } catch (error) {
            console.warn('AxiosRequester -> postFormData: ', error);
            return error;
        }
    }

    post = async (url: string, data?: object, headers?: object, timeoutMS?: number): Promise<any> => {
        try {
            const config: any = {
                method: 'POST',
                headers: {
                    'Cache-Control': 'no-cache',
                    'Content-Type': 'application/json',
                    'authorization': `Bearer ${userModel?.token}`
                },
                url,
                timeout: timeoutMS || 60000
            };
            headers && (config.headers = headers);
            data && (config.data = JSON.stringify(data));
            const response = await Axios(config);
            return response;
        } catch (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                console.log(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
            }
            console.warn('AxiosRequester -> post: ', error.message);
            return error?.response?.data || error;
        }
    }

    get = async (url: string, params?: object, headers?: object, timeoutMS?: number): Promise<any> => {
        try {
            const config: any = {
                method: 'GET',
                headers: {
                    'Cache-Control': 'no-cache',
                    'Content-Type': 'application/json',
                },
                url,
                timeout: timeoutMS || 60000
            };
            headers && (config.headers = headers);
            params && (config.params = params);
            const response = await Axios(config);
            return response;
        } catch (error) {
            console.warn('AxiosRequester -> get: ', error);
            return error?.response?.data || error;
        }
    }

}
