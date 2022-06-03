import { PermissionsAndroid } from "react-native";
import { PERMISSIONS } from "react-native-permissions";

class PermissionsRN {

    writeFile = async () => {
        const granted = await PermissionsAndroid.request(PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE);
        return granted === PermissionsAndroid.RESULTS.GRANTED;
    }

}

export const permissionsRN = new PermissionsRN();