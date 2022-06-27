// import { IStorage, storage } from "../../../../libs/storage";
// import { MobXRepository } from "../../repository/MobXRepository";
// import { IBypassCompany } from "./IBypassCompany";
// import { IBypassSheet } from "./IBypassSheet";

// export interface IBypassListModel {
//     bypassList: IBypassCompany[];
//     chosenCompany: IBypassCompany | null;
//     addCompany: (item: IBypassCompany) => void;
// }

// class BypassListModel implements IBypassListModel {
//     private bypassListRepository = new MobXRepository<IBypassCompany[]>([]);
//     private chosenCompanyRepository = new MobXRepository<IBypassCompany | null>();

//     constructor(private storage: IStorage) {
//         this.load();
//     }

//     private persistBypassList = (data: IBypassCompany[] | null) => {
//         if (data) {
//             this.storage.set('bypassList', data);
//         } else {
//             this.storage.remove('bypassList');
//         }
//     }

//     private load = () => {
//         this.storage.get('bypassList')
//             .then(data => { data && this.bypassListRepository.save(data); })
//             .catch(error => console.warn('BypassListModel -> load: ', error));
//     }

//     get bypassList() {
//         return this.bypassListRepository.data || [];
//     }

//     set bypassList(data: IBypassCompany[]) {
//         this.bypassListRepository.save(data);
//         this.persistBypassList(this.bypassList);
//     }

//     addCompany = (item: IBypassCompany) => {
//         this.bypassList = [...this.bypassList, item];
//     }

//     updateCompany = (item: IBypassCompany) => {
//         this.bypassList = this.bypassList.map(company => company.id === item.id ? item : company);
//     }

//     addBypassList = (companyId: number, item: IBypassSheet) => {
//         const bypassList = this.bypassList.map(bypassCompany => {
//             if (bypassCompany.id === companyId) {
//                 return { ...bypassCompany, items: [...bypassCompany.items, item] }
//             }
//             return bypassCompany;
//         })
//         this.bypassList = bypassList;
//     }

//     deleteBypassList = (companyId: number, item: IBypassSheet) => {
//         const bypassList = this.bypassList.map(bypassCompany => {
//             if (bypassCompany.id === companyId) {
//                 return { ...bypassCompany, items: [...bypassCompany.items, item] }
//             }
//             return bypassCompany;
//         })
//         this.bypassList = bypassList;
//     }

//     get chosenCompany() {
//         return this.chosenCompanyRepository.data;
//     }

//     set chosenCompany(data: IBypassCompany | null) {
//         this.chosenCompanyRepository.save(data);
//     }

//     deleteCompanyItem = (id: number) => {
//         if (this.chosenCompany) {
//             const items = this.chosenCompany.items.filter(item => item.id != id);
//             this.chosenCompany = { ...this.chosenCompany, items };
//         }
//     }

// }

// export const bypassListModel = new BypassListModel(storage);


import { IStorage, storage } from "../../../../libs/storage";
import { MobXRepository } from "../../repository/MobXRepository";
import { IBypassSheet } from "./IBypassSheet";

export interface IBypassListModel {
    bypassList: IBypassSheet[];
    addBypassList: (item: IBypassSheet) => void;
    updateBypassSheet: (item: IBypassSheet) => void;
    deleteBypassList: (item: IBypassSheet) => void;
}

class BypassListModel implements IBypassListModel {
    private bypassListRepository = new MobXRepository<IBypassSheet[]>([]);

    constructor(private storage: IStorage) {
        this.load();
    }

    private persistBypassList = (data: IBypassSheet[] | null) => {
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

    set bypassList(data: IBypassSheet[]) {
        this.bypassListRepository.save(data);
        this.persistBypassList(this.bypassList);
    }

    addBypassList = (item: IBypassSheet) => {
        this.bypassList = [...this.bypassList, item];
    }

    updateBypassSheet = (item: IBypassSheet) => {
        const bypassList = this.bypassList.map(list => list.id === item.id ? item : list);
        console.log('bypassListbypassList ', bypassList)
        this.bypassList = bypassList;
    }

    deleteBypassList = (item: IBypassSheet) => {
        const bypassList = this.bypassList.filter(bypassList => bypassList.id !== item.id);
        this.bypassList = bypassList;
    }

}

export const bypassListModel = new BypassListModel(storage);
