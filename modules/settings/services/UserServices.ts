import { ICropedImage } from "../../../libs/imagePicker/IImagePicker/ICropedImage";
import { IRestPost } from "../../../libs/requester";
import { IFormDataRequest } from "../../../libs/requester/IRequester/IFormDataRequest";
import { ILinks } from "../../../src/config";
import { ISetUserAvatar } from "../useCases/_ports/ISetUserAvatar";

export class UserServices implements ISetUserAvatar {

    constructor(
        private requestor: IRestPost & IFormDataRequest,
        private links: ILinks,
    ) { }

    setUserAvatar = async (avatar: ICropedImage) => {
        try {
            const formData = new FormData();
            // @ts-ignore
            formData.append('avatar', { name: 'photo.jpg', type: 'image/jpeg', uri: avatar.path });
            const response = await this.requestor.postFormData(this.links.LINKS.SET_USER_AVATAR, formData);
            const result = this.processingResponse(response);
            return result;
        } catch (error) {
            console.warn('UserServices -> setUserAvatar: ', this.links.LINKS.SET_USER_AVATAR, error);
            return { isError: true, data: null, message: '' } as any;
        }
    }

    private processingResponse = (response: any) => {
        let result: any = { isError: true, message: '' };;
        if (response?.status < 400) {
            result = { isError: false, data: response.data };
        } else {
            console.warn('UserServices -> processingResponse: ', { response }, response?.error);
        }
        return result;
    }

}