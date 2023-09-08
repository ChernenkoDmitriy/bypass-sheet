import { MobXRepository } from "../../repository/MobXRepository"
import { ITimeSheet } from "./ITimeSheet";

export interface ITimeSheetServiceModel {
    timeSheetList: ITimeSheet[] | null;
    timeSheetListUser: ITimeSheet[] | null;
}

class TimeSheetModel implements ITimeSheetServiceModel {
    private timeSheetListRepository = new MobXRepository<[]>([]);
    private timeSheetListUserRepository = new MobXRepository<[]>([]);

    get timeSheetList() {
        return this.timeSheetListRepository.data || [];
    }

    set timeSheetList(data: []) {
        this.timeSheetListRepository.save(data);
    }

    get timeSheetListUser() {
        return this.timeSheetListUserRepository.data || [];
    }

    set timeSheetListUser(data: []) {
        this.timeSheetListUserRepository.save(data);
    }

    clear = () => {
    }
}

export const timeSheetModel = new TimeSheetModel();