import { IStorage, storage } from "../../../../../libs/storage";
import { MobXRepository } from "../../repository/MobXRepository";
import { IGoogleSheet } from "./IGoogleSheet";
import { ILocation } from "./ILocation";
import { IUser } from "./IUser";

export interface IUserModel {
    user: IUser | null;
    token: string | null;
    googleSheet: IGoogleSheet;
    location: ILocation;
    userList: IUser[] | null;
}

class UserModel implements IUserModel {
    private userRepository = new MobXRepository<IUser>();
    private tokenRepository = new MobXRepository<string | null>(null);
    private googleSheetRepository = new MobXRepository<IGoogleSheet>({ sheetId: '', sheetName: '' });
    private locationRepository = new MobXRepository<ILocation>({} as ILocation);
    private userListRepository = new MobXRepository<IUser[] | null>(null);

    constructor(private storage: IStorage) {
        this.load();
    }

    private persistToken = (data: string | null) => {
        if (data) {
            this.storage.set('TOKEN', data);
        } else {
            this.storage.remove('STORAGE_TOKEN');
        }
    }

    private persistUser = (data: IUser | null) => {
        if (data) {
            this.storage.set('USER', data);
        } else {
            this.storage.remove('USER');
        }
    }

    private load = () => {
        this.storage.get('USER')
            .then(data => { data && this.userRepository.save(data); })
            .catch(error => console.warn('userRepository -> load: ', error));
        this.storage.get('TOKEN')
            .then(data => { data && this.tokenRepository.save(data); })
            .catch(error => console.warn('tokensRepository -> load: ', error));
        this.storage.get('GOOGLE_SHEET')
            .then(data => { data && this.googleSheetRepository.save(data); })
            .catch(error => console.warn('googleSheetRepository -> load: ', error));
    }

    get user() {
        return this.userRepository.data;
    }

    set user(data: IUser | null) {
        this.userRepository.save(data);
        this.persistUser(data);
    }

    get token() {
        return this.tokenRepository.data;
    }

    set token(data: string | null) {
        this.tokenRepository.save(data);
        this.persistToken(data);
    }

    get googleSheet() {
        return this.googleSheetRepository.data ?? { sheetId: '', sheetName: '' };
    }

    get location() {
        return this.locationRepository.data || {} as ILocation;
    }

    set location(data: ILocation) {
        this.locationRepository.save(data);
    }

    get userList() {
        return this.userListRepository.data || [];
    }

    set userList(data: IUser[]) {
        this.userListRepository.save(data);
    }

    onSetGoogleSheetId(value: string) {
        this.googleSheetRepository.save({ ... this.googleSheet, sheetId: value });
        this.storage.set('GOOGLE_SHEET', { ... this.googleSheet, sheetId: value });
    }

    onSetGoogleSheetName(value: string) {
        this.googleSheetRepository.save({ ... this.googleSheet, sheetName: value });
        this.storage.set('GOOGLE_SHEET', { ... this.googleSheet, sheetName: value });
    }

    clear = () => {
        this.userRepository.save(null);
        this.storage.remove('USER');
        this.tokenRepository.save('');
        this.storage.remove('TOKENS');
        this.googleSheetRepository.save({ sheetId: '', sheetName: '' });
        this.storage.remove('GOOGLE_SHEET');
    }
}

export const userModel = new UserModel(storage);