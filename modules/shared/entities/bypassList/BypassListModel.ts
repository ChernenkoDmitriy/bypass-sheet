import { IStorage, storage } from "../../../../libs/storage";
import { MobXRepository } from "../../repository/MobXRepository";
import { IBypassCompany } from "./IBypassCompany";
import { IBypassSheet } from "./IBypassSheet";

export interface IBypassListModel {
    bypassList: IBypassCompany[];
    addCompany: (item: IBypassCompany) => void;
}

class BypassListModel implements IBypassListModel {
    private bypassListRepository = new MobXRepository<IBypassCompany[]>([]);

    constructor(private storage: IStorage) {
        this.load();
    }

    private persistBypassList = (data: IBypassCompany[] | null) => {
        if (data) {
            this.storage.set('bypassList', data);
        } else {
            this.storage.remove('bypassList');
        }
    }

    private load = () => {
        this.storage.get('bypassList')
            .then(data => { data && this.bypassListRepository.save(data); })
            .catch(error => console.warn('BypassListModel -> load: ', error));
    }

    get bypassList() {
        return this.bypassListRepository.data || [];
    }

    set bypassList(data: IBypassCompany[]) {
        this.bypassListRepository.save(data);
        this.persistBypassList(this.bypassList);
    }

    addCompany = (item: IBypassCompany) => {
        this.bypassList = [...this.bypassList, item];
    }

    updateCompany = (item: IBypassCompany) => {
        this.bypassList = this.bypassList.map(company => company.id === item.id ? item : company);
    }

    addBypassList = (companyId: number, item: IBypassSheet) => {
        const bypassList = this.bypassList.map(bypassCompany => {
            if (bypassCompany.id === companyId) {
                return { ...bypassCompany, items: [...bypassCompany.items, item] }
            }
            return bypassCompany;
        })
        this.bypassList = bypassList;
    }

}

export const bypassListModel = new BypassListModel(storage);
