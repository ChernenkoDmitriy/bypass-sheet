import { MobXRepository } from "../../repository/MobXRepository"
import { ITimeSheet } from "./ITimeSheet";

export interface ITimeSheetServiceModel {
    timeSheetList: ITimeSheet[] | null;
    timeSheetListUser: ITimeSheet[] | null;
    chosenDate: ITimeSheet | null;
}

class TimeSheetModel implements ITimeSheetServiceModel {
    private timeSheetListRepository = new MobXRepository<ITimeSheet[]>([]);
    private timeSheetListUserRepository = new MobXRepository<ITimeSheet[]>([]);
    private chosenDateRepository = new MobXRepository<ITimeSheet | null>(null);

    get timeSheetList() {
        return this.timeSheetListRepository.data || [];
    }

    set timeSheetList(data: ITimeSheet[]) {
        this.timeSheetListRepository.save(data);
    }

    get timeSheetListUser() {
        return this.timeSheetListUserRepository.data || [];
    }

    set timeSheetListUser(data: ITimeSheet[] ) {
        this.timeSheetListUserRepository.save(data);
    }

    get chosenDate() {
        return this.chosenDateRepository.data || null;
    }

    set chosenDate(data: ITimeSheet | null) {
        this.chosenDateRepository.save(data);
    }

    clear = () => {
    }
}

export const timeSheetModel = new TimeSheetModel();