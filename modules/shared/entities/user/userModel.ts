import { IStorage, storage } from "../../../../libs/storage";
import { MobXRepository } from "../../repository/MobXRepository";
import { IGoogleSheet } from "./IGoogleSheet";
import { IUser } from "./IUser";

export interface IUserModel {
    user: IUser | null;
    tokens: ITokens | null;
    googleSheet: IGoogleSheet;
}

class UserModel implements IUserModel {
    private userRepository = new MobXRepository<IUser>();
    private tokensRepository = new MobXRepository<ITokens>();
    private googleSheetRepository = new MobXRepository<IGoogleSheet>({ sheetId: '', sheetName: '' });

    constructor(private storage: IStorage) {
        this.load();
    }

    private load = () => {
        this.storage.get('USER')
            .then(data => { data && this.userRepository.save(data); })
            .catch(error => console.warn('userRepository -> load: ', error));
        this.storage.get('TOKENS')
            .then(data => { data && this.tokensRepository.save(data); })
            .catch(error => console.warn('tokensRepository -> load: ', error));
        this.storage.get('GOOGLE_SHEET')
            .then(data => { data && this.googleSheetRepository.save(data); })
            .catch(error => console.warn('googleSheetRepository -> load: ', error));
    }

    get user() {
        return this.userRepository.data || null;
    }

    set user(data: IUser | null) {
        if (data && typeof data === 'object') {
            this.storage.set('USER', data);
            this.userRepository.save(data);
        }
    }

    get tokens() {
        return this.tokensRepository.data || null;
    }

    set tokens(data: ITokens | null) {
        if (data && typeof data === 'object') {
            this.storage.set('TOKENS', data);
            this.tokensRepository.save(data);
        }
    }

    get googleSheet() {
        return this.googleSheetRepository.data ?? { sheetId: '', sheetName: '' };
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
        this.tokensRepository.save(null);
        this.storage.remove('TOKENS');
        this.googleSheetRepository.save({ sheetId: '', sheetName: '' });
        this.storage.remove('GOOGLE_SHEET');
    }
}

export const userModel = new UserModel(storage);