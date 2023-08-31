import { MobXRepository } from "../../repository/MobXRepository"
import { IUser } from "../user/IUser";

export interface IAuthorizationModel {
    phone: string;
    code: string;
    user: IUser;
    notifications: string | null;
}

class AuthorizationModel implements IAuthorizationModel {
    private phoneRepository = new MobXRepository<string>('');
    private codeRepository = new MobXRepository<string>('');
    private userRepository = new MobXRepository<IUser>();
    private notificationsRepository = new MobXRepository<string>('');

    get phone() {
        return this.phoneRepository.data || '';
    }

    set phone(data: string) {
        this.phoneRepository.save(data);
    }

    get code() {
        return this.codeRepository.data || '';
    }

    set code(data: string) {
        this.codeRepository.save(data);
    }

    get user() {
        return this.userRepository.data || {} as IUser;
    }

    set user(data: IUser) {
        this.userRepository.save(data);
    }

    get notifications() {
        return this.notificationsRepository.data || '';
    }

    set notifications(data: string | null) {
        this.notificationsRepository.save(data);
    }

    clear = () => {
        this.phone = '';
        this.code = '';
    }
}

export const authorizationModel = new AuthorizationModel();