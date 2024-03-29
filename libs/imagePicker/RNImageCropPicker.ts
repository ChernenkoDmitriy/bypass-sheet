import { Platform } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import { PERMISSIONS, check, RESULTS, openSettings, } from 'react-native-permissions';
import { ICropedImage } from './IImagePicker/ICropedImage';
import { IPickImage } from './IImagePicker/IPickImage';

const isIOS = Platform.OS === 'ios';

class RNImageCropPicker implements IPickImage {
    private getPermission = async () => {
        const permissionsStatus = await check(PERMISSIONS.IOS.PHOTO_LIBRARY);
        switch (permissionsStatus) {
            case RESULTS.BLOCKED:
                await openSettings();
                break;
        }
    };

    onOpenPicker = async (cropping?: boolean) => {
        try {
            await this.getPermission();
            const result: any = await ImagePicker.openPicker({
                includeBase64: true,
                compressImageQuality: 0.3,
                forceJpg: true,
                cropping,
            });
            return { ...result } as ICropedImage;
        } catch (error) {
            console.warn('RNImageCropPicker -> onOpenPicker: ', error);
            return null;
        }
    };

    onLoadPhoto = async () => {
        try {
            await this.getPermission();
            const result: any = await ImagePicker.openCamera({
                cropping: true,
                includeBase64: true,
                compressImageQuality: 0.3,
                forceJpg: true,
            });
            return { ...result } as ICropedImage;
        } catch (error) {
            console.warn('RNImageCropPicker -> onOpenPicker: ', error);
            return null;
        }
    };

}

export const imagePicker = new RNImageCropPicker();
