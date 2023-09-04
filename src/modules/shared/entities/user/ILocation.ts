import { GeoPosition } from "react-native-geolocation-service";
import { PermissionStatus } from "react-native-permissions";

export interface ILocation extends GeoPosition {
    city?: string;
    permissionStatus: PermissionStatus;
};