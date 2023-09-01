export interface IResponse {
    status: 'ok' | 'error' | string;
    isError: boolean;
    message: string;
    error?: any;
    messageKey?: string;
    invalidFields?: { msg: string, param: string, }[],
    data?: any;
}
