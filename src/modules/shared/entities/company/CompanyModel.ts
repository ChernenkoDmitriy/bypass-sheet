import { IStorage, storage } from "../../../../../libs/storage";
import { MobXRepository } from "../../repository/MobXRepository"
import { ICompany } from "./ICompany";

export interface ICompanyModel {
    offset: number;
    limit: number;
    companyList: ICompany[];
    chosenCompany: ICompany | null;
}

class CompanyModel implements ICompanyModel {
    private offsetRepository = new MobXRepository<number>(0);
    private limitRepository = new MobXRepository<number>(20);
    private companyListRepository = new MobXRepository<[]>([]);
    private chosenCompanyRepository = new MobXRepository<ICompany | null>(null);

    constructor(private storage: IStorage) {
        this.load();
    }

    private load = () => {
        this.storage.get('COMPANY')
            .then(data => { data && this.chosenCompanyRepository.save(data) })
            .catch(error => console.warn('EventsModel -> load: COMPANY', error));
    }

    private persistProducts = (data: ICompany | null) => {
        if (data) {
            this.storage.set('COMPANY', data);
        } else {
            this.storage.remove('COMPANY');
        }
    }

    get offset() {
        return this.offsetRepository.data || 2;  //TODO real data 
    }

    set offset(data: number) {
        this.offsetRepository.save(data);
    }

    get limit() {
        return this.limitRepository.data || 20;
    }

    set limit(data: number) {
        this.limitRepository.save(data);
    }

    get companyList() {
        return this.companyListRepository.data || [];
    }

    set companyList(data: []) {
        this.companyListRepository.save(data);
    }

    get chosenCompany() {
        return this.chosenCompanyRepository.data || null;
    }

    set chosenCompany(data: ICompany | null) {
        this.chosenCompanyRepository.save(data);
        this.persistProducts(data);
    }

    clear = () => {
        this.offset = 0;
        this.limit = 0;
        this.companyList = [];
    }
}

export const companyModel = new CompanyModel(storage);