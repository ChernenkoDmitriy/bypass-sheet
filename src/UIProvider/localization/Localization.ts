import i18n from 'i18n-js';
import { IStorage, storage } from '../../../libs/storage';
import { IRepository } from '../../../modules/shared/repository/IRepository';
import { MobXRepository } from '../../../modules/shared/repository/MobXRepository';
import { ILocalization } from './ILocalization';
import { translations } from './Translation';

class Localization implements ILocalization {
    constructor(private localizationStore: IRepository<string>, private storage: IStorage) {
        i18n.fallbacks = true;
        i18n.translations = translations;
        this.load();
    }

    private persistLanguage = (data: string | null) => {
        if (data) {
            this.storage.set('LANGUAGE', data);
        } else {
            this.storage.remove('LANGUAGE');
        }
    }

    private load = () => {
        this.storage.get('LANGUAGE')
            .then(data => { data && this.localizationStore.save(data); })
            .catch(error => console.warn('Localization -> load: ', error));
    }

    get locales() {
        return Object.keys(i18n.translations);
    }

    get locale() {
        return this.localizationStore.data || 'ru';
    }

    setTranslation = (translations: any) => {
        if (typeof translations === 'object' && translations) {
            i18n.translations = translations;
        }
    }

    t = (key: string) => {
        const locale = this.localizationStore.data;
        return i18n.t(key, { locale: locale });
    }

    setLocale = (locale: string) => {
        this.localizationStore.save(locale);
        this.persistLanguage(locale);
    }

}

const localizationStore = new MobXRepository<string>('ru');
export const localization = new Localization(localizationStore, storage);
