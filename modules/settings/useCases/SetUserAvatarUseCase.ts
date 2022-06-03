import { ICropedImage } from "../../../libs/imagePicker/IImagePicker/ICropedImage";
import { IUserModel } from "../../shared/entities/user/User";
import { ISetUserAvatar } from "./_ports/ISetUserAvatar";

export class SetUserAvatarUseCase {
    constructor(
        private userServices: ISetUserAvatar,
        private userModel: IUserModel,
    ) { }

    setUserAvatar = async (avatar: ICropedImage) => {
        try {
            const data = await this.userServices.setUserAvatar(avatar);
            if (!data?.isError) {
                this.userModel.user = data.data;
            }
        } catch (error) {
            console.warn('SetUserAvatarUseCase -> setUserAvatar: ', error);
        }
    }

}
