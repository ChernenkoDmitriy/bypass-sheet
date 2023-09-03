import { MobXRepository } from "../../repository/MobXRepository"
import { IUser } from "../user/IUser";
import { ICompany } from "./ICompany";

export interface ICompanyModel {
    offset: number;
    limit: number;
    companyList: ICompany[];
}

class CompanyModel implements ICompanyModel {
    private offsetRepository = new MobXRepository<number>(0);
    private limitRepository = new MobXRepository<number>(20);
    private companyListRepository = new MobXRepository<[]>([]);

    get offset() {
        return this.offsetRepository.data || 0;
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

    clear = () => {
        this.offset = 0;
        this.limit = 0;
    }
}

export const companyModel = new CompanyModel();