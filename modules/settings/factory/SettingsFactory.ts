import { AxiosRequester } from "../../../libs/requester";
import { Config } from "../../../src/config";
import { userModel } from "../../shared/entities/user/User";
import { UserServices } from "../services/UserServices";
import { SetUserAvatarUseCase } from "../useCases/SetUserAvatarUseCase";

class SettingsFactory {
    private requester = new AxiosRequester();
    private config = new Config();
    private userServices = new UserServices(this.requester, this.config);

    public setUserAvatar = new SetUserAvatarUseCase(this.userServices, userModel).setUserAvatar;
}

export const settingsFactory = new SettingsFactory();
