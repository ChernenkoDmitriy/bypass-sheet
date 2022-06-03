import { ICropedImage } from "../../../../libs/imagePicker/IImagePicker/ICropedImage";
import { IUser } from "../../../shared/entities/user/IUser";

export interface ISetUserAvatar {
    setUserAvatar: (avatar: ICropedImage) => Promise<{ isError: boolean; data: IUser; message: string }>;
}