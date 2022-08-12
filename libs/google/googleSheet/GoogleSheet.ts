import { userModel } from "../../../modules/shared/entities/user/userModel";

const API_KEY = 'AIzaSyCLgCXpD2pNBKDkVSOP3nUderJZiFj5SDI';

interface ISheet {
    majorDimension: string;
    range: string;
    values: string[][];
}

class GoogleSheet {

    private request = async (url: string, method: 'POST' | 'GET' | 'PUT', body?: string) => {
        const headers = { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + userModel.tokens?.accessToken };
        const response = await fetch(url, { method, body, headers });
        return await response;
    }

    readSheet = async (sheetId: string) => {
        const url = 'https://sheets.googleapis.com/v4/spreadsheets/' + sheetId;
        const response = await this.request(url, 'GET');
        const responseJson = await response.json();
        return responseJson;
    }

    read = async (sheetId: string, sheetName: string): Promise<ISheet | null> => {
        try {
            const url = 'https://sheets.googleapis.com/v4/spreadsheets/' + sheetId + '/values/' + sheetName + '?valueRenderOption=FORMATTED_VALUE&key=' + API_KEY;
            const response = await this.request(url, 'GET');
            const responseJson = await response.json();
            return responseJson;
        } catch (error) {
            console.warn('GoogleSheet -> read: ', error);
            return null;
        }
    }

    update = async (sheetId: string, sheetName: string, body: object, range: string) => {
        try {
            const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${sheetName}!${range}?valueInputOption=USER_ENTERED`;
            const bodyJson = JSON.stringify(body);
            const response = await this.request(url, 'PUT', bodyJson);
            const responseJson = await response.json();
            return responseJson;
        } catch (error) {
            console.warn('GoogleSheet -> read: ', error);
            return null;
        }
    }

    editRow = async (sheetId: string, body: object) => {
        try {
            const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}:batchUpdate`;
            const bodyJson = JSON.stringify(body);
            const response = await this.request(url, 'POST', bodyJson);
            const responseJson = await response.json();
            return responseJson;
        } catch (error) {
            console.warn('GoogleSheet -> read: ', error);
            return null;
        }
    }

}

export const googleSheet = new GoogleSheet();