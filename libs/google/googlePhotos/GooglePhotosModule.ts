import { Buffer } from "buffer";

interface IGoogleSignInModule {
    createAlbum: (title: string) => Promise<any>;
    setAccessToken: (token: string) => void;
}

const id = __DEV__
    ? '72193947478-kefcn6h9a64tfnvoqv6f6nkqo307e9d2.apps.googleusercontent.com'
    : '72193947478-c4kk8mtghqfvb82v854komp6jl1fcaul.apps.googleusercontent.com';

class GooglePhotosModule implements IGoogleSignInModule {
    private accessToken!: string;
    private API_KEY = 'AIzaSyCLgCXpD2pNBKDkVSOP3nUderJZiFj5SDI';

    constructor() {

    }

    setAccessToken = (token: string) => {
        this.accessToken = token;
    }

    private request = async (url: string, method: 'POST' | 'GET', headers?: HeadersInit, body?: string) => {
        const response = await fetch(url, {
            method,
            headers,
            body
        });
        return await response;
    }

    getAlbums = async () => {
        const url = 'https://photoslibrary.googleapis.com/v1/albums?key=' + this.API_KEY;
        const headers = { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.accessToken };
        const response = await this.request(url, 'GET', headers);
        const responseJSON = await response.json();
        console.log('responseJSON ', responseJSON)
    }

    createAlbum = async (title: string) => {
        try {
            const url = 'https://photoslibrary.googleapis.com/v1/albums';
            const body = JSON.stringify({ "album": { title } });
            const headers = { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.accessToken };
            const response = await this.request(url, 'POST', headers, body);
            const responseJSON = await response?.json();
            return responseJSON;
        } catch (error: any) {
            console.error('GooglePhotosModule -> createAlbum: ', error);
            return null;
        }
    };

    private getUploadToken = async (photo: string) => {
        try {
            const image = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANYAAADrCAMAAAAi2ZhvAAAAe1BMVEX///8AAACysrK6urr8/Pza2tpSUlLd3d2MjIyGhoZ5eXnT09Ourq7BwcGqqqptbW3n5+fw8PD19fWVlZU6OjpbW1tCQkImJibLy8uhoaFqamoyMjIsLCy3t7fs7OxMTEwTExM3Nzd/f3+ZmZl0dHQgICBhYWEVFRVGRkYV1DeMAAAExklEQVR4nO2c61bqMBBGFSwF8QIoiqJyEdT3f8IjunTpYRdmclonnvXt303WN20ymcwkPTgQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgjxexmWRVH0i6IcjKKl1EPR6nXWh9+4m61uJsNoYemUj7PDStbL06NogQmU3WqTPhi3o1U6aS32G/VGbxAt1c6N0aY3bn+JYS2PURtWv8A9lpdeq145i1a9j4sEo165eogWvovRS5pVr2TsFMtq1Zed8dO4czWvfqIXrb6KSYXgVfvLEBucdq/5sXGc8l20UezsdPvJ8hgfvfp5zftBqxZ9fniIhmVoF47AHY67XMPznZ/Ta2MAIue744dbaHL+Q3KNHIHE6b4IvQeNbn5ErpXxtsC7/a3IrorJGALFtpZAj8ZhPrswmliFqSUsYauGxdqB6PbC1pJeSC7D8GRb2rW1LYTG6ya12iEvODG3hsZ5bFMgaTGzt6ZNZw5eY/SP0wOC+hwWL/hYU097Whya0uoAVLU87elr3zcl1gy4QefceNru4LIhsXYW26KefD2cwospmxFrhvb5ziFEC0S3GbVmKNPkLRtAnDxvQKqHuxomxhm8mtgIimI69wCigRw7CskPQk5mD9CJYbfWILRh8idoO9BLaF4e9CSECFQK83/z+ngAPY4w9wPKxUUmeWklXfq7IZ8RGWg8gp6E8JsW5MjdyXlNk+IZ+gksDcFibMzNfIfqR4ELMg2elLcMQXygKxySWSkdUaEhziwKnZLMooUrrjxJVZKkqIf2Aa4tdq3QsvWS0hHlM07qVmuGAt2kEhVtTeLMopecVAGm9xNnFk2J25SOKAcal9sls5LqifdZmUV+OcksCuFlVs3UZlZeg5DmljP3+Q65jDhPSNut/8DB07qVtBznFWXQlEg64EOfPa+Y0Fw1/gpN0rhiUB/U1LYxidtvUT4tyaxVVmZhxihl0w81k8j8J2WMUlI0V9BPYIqG3nLKZp2+euCp/5qOzuFgDqwtUNBz7O+GktVJC0VNkJ6aSgsJb6c+aPT4e8kr8XTABTf/XCfPE3pPiIK5Woqs89qleihAkbuaTcnh4KsZoMhdcCN/aj+Q2AhLkORdcahK1ohYOxTEeycXdBHq3jfAKUdnlobeTPgxZFpzfGVfGMexh002UOnOt7GFDjI4hAwHaVz5DIqcmtLqgOJCz54r/W5As0Do48iBUkUzi3vIFCTYD6Xm+rGwTm8utVKE0aRWB7S5Ne4r6LR4NjeQKbtrO7ALG5uM7keC11hY2lHaM6P/ntAwNHhDKvBnMwQ30L5rb2hIVoXHuN9JOKJBIzC7C9Ukcr4j2jiiNMhzDje3voPX2ZdVAQM5z6zcxSf8/wH8h057is/m+S+Qil8gLR77X8fWQ5vtP1zn+K02kGt757qz6nW7veVT9Z9qXvKbVx9gedJGtj832TAi/2YhOIG2F/dfnjacZ7HD2slRhUeoZhqeZzIxoHxmJXdZRYE7eaAyJTLLfVL9RdvgPJ4vfslv4b4yatGltU9eHlPOBORBcbaCwwnT25tJvouvmeGgLPv9yaTfL8pBriGSEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYSolz88Dy0vfFyW4wAAAABJRU5ErkJggg==';
            const url = 'https://photoslibrary.googleapis.com/v1/uploads';
            // const body = JSON.stringify({ 'media-binary-data':image });
            const bufferImage = Buffer.from(image, 'binary');
            console.log(bufferImage)
            const body = JSON.stringify({ 'media-binary-data': Buffer.from(image, 'base64') });
            const headers = {
                'Content-Type': 'application/octet-stream',
                'Authorization': 'Bearer ' + this.accessToken,
                'X-Goog-Upload-Content-Name': 'image.png',
                'X-Goog-Upload-Content-Type': 'image/png',
                'X-Goog-Upload-Protocol': 'raw'
            };
            const response = await this.request(url, 'POST', headers, body);
            const token = await response.text();
            console.log('token ', token)
            return token;
        } catch (error: any) {
            console.error('GooglePhotosModule -> getUploadToken: ', JSON.stringify(error));
            return '';
        }
    };

    private uploadMediaItems = async (token: string) => {
        const url = 'https://photoslibrary.googleapis.com/v1/mediaItems:batchCreate';
        const body = JSON.stringify({
            "albumId": 'AAZY7rrfJ_VoROO72yf7E_Qx_I8eQibmJV6aW6Nkgr7zlT1KJ2HWfFqIJd3DgQnWCQ52PnOlDpnF',
            "newMediaItems": [{ "description": "Event Photo", "simpleMediaItem": { "uploadToken": token } }]
        })
        const headers = { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.accessToken, };
        const response = await this.request(url, 'POST', headers, body);
        const res = await response.json();
        console.log('actual upload: ', res.newMediaItemResults[0].status)
    }

    uploadPhoto = async (photo: string) => {
        const token = await this.getUploadToken(photo);
        const response = await this.uploadMediaItems(token);
        // console.log('uploadPhoto ', response)
    }

}

export const googlePhotosModule = new GooglePhotosModule();