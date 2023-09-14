import { MobXRepository } from "../../repository/MobXRepository"
import { IWorkShift } from "./IWorkShift";

export interface IWorkShiftModel {
    company_id: number;
    workShift: IWorkShift[];
}

class WorkShiftModel implements IWorkShiftModel {
    private company_idRepository = new MobXRepository<number>(0);
    private workShiftListRepository = new MobXRepository<[]>([]);

    get company_id() {
        return this.company_idRepository.data || 2;
    }

    set company_id(data: number) {
        this.company_idRepository.save(data);
    }

    get workShift() {
        return this.workShiftListRepository.data || [];
    }

    set workShift(data: []) {
        this.workShiftListRepository.save(data);
    }

    clear = () => {
        this.company_id = 0;
        this.workShift = [];
    }
}

export const workShiftModel = new WorkShiftModel();