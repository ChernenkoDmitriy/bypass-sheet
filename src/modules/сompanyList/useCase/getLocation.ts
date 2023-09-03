import Geolocation, { GeoError, GeoPosition } from 'react-native-geolocation-service';
import { loggerModel } from '../../../UIKit/logger/entity/loggerModel';
import { IResponse } from '../../../../libs/requester/IRequester/IResponse';
import { userService } from '../../shared/entities/user/UserService';
import { userModel } from '../../shared/entities/user/userModel';

const OPTIONS = {
    enableHighAccuracy: true,
    timeout: 15000,
    maximumAge: 10000
};

interface ILocationResults {
    long_name: string;
    short_name: string;
    types: string[];
};

const processResponse = (response: IResponse) => {
    if (response.isError) {
        loggerModel.add('error', 'getLocation -> Geolocation.getCurrentPosition -> getLocationDetails -> processResponse: ', response?.message);
        console.log('getLocation -> Geolocation.getCurrentPosition -> getLocationDetails -> processResponse: ', response?.message);
        return;
    };
    const result = response.data?.results[0]?.address_components?.find((item: ILocationResults) => item.types.includes('locality'));
    userModel.location = { ...userModel.location, city: result?.long_name, };
    console.log('processResponse => ', result?.long_name);
};

const getLocationDetails = async (location: GeoPosition) => {
    userModel.location = { ...userModel.location, ...location };
    if (userModel.user) {
        userModel.user.latitude = userModel.location.coords.latitude;
        userModel.user.longitude = userModel.location.coords.longitude;
    };
    const response = await userService.getLocationDetails(location.coords.latitude + ',' + location.coords.longitude, 'en');
    const resultCity = response.data.results[0].address_components.find((item: any) => item.types.includes('locality'));
    console.log('getLocationDetails =>', response);
    processResponse(response);
};

const onError = (error: GeoError) => {
    loggerModel.add('error', 'getLocation -> Geolocation.getCurrentPosition: ', error.code + ' ' + error.message)
    console.log('getLocation -> Geolocation.getCurrentPosition: ', error.code + ' ' + error.message);
};

export const getLocation = async () => {
    await Geolocation.getCurrentPosition(
        getLocationDetails,
        onError,
        OPTIONS
    );
};