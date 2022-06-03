import { MobXRepository } from "../../repository/MobXRepository";
import { IBypassSheet } from "../bypassList/IBypassSheet";

export interface IBypassReportModel {
    bypassReport: IBypassSheet | null;
}

class BypassReportModel implements IBypassReportModel {
    private bypassReportRepository = new MobXRepository<IBypassSheet>();

    constructor() {

    }

    get bypassReport() {
        return this.bypassReportRepository.data;
    }

    set bypassReport(data: IBypassSheet | null) {
        this.bypassReportRepository.save(data);
    }

}

export const bypassReportModel = new BypassReportModel();
