import { ICropedImage } from "../../../libs/imagePicker/IImagePicker/ICropedImage";
import { appStateModel } from "../../shared/entities/appState/AppStateModel";
import { settingsFactory } from "../factory/SettingsFactory";

export const useUserProfile = () => {

    const onSelectUserAvatar = async (avatar: ICropedImage) => {
        appStateModel.isLoading = true;
        await settingsFactory.setUserAvatar(avatar);
        appStateModel.isLoading = false;
    }

    return { onSelectUserAvatar };

}