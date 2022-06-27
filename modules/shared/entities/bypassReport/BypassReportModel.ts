import { IStorage, storage } from "../../../../libs/storage";
import { MobXRepository } from "../../repository/MobXRepository";
import { IBypassSheet } from "../bypassList/IBypassSheet";

export interface IBypassReportModel {
    bypassReport: IBypassSheet | null;
}

class BypassReportModel implements IBypassReportModel {
    private bypassReportRepository = new MobXRepository<IBypassSheet>();

    constructor(private storage: IStorage) {
        this.load();
    }


    private persistReport = (data: IBypassSheet | null) => {
        if (data) {
            this.storage.set('report', data);
        } else {
            this.storage.remove('report');
        }
    }

    private load = () => {
        this.storage.get('report')
            .then(data => { data && this.bypassReportRepository.save(data); })
            .catch(error => console.warn('BypassReportModel -> load: ', error));
    }

    get bypassReport() {
        return this.bypassReportRepository.data;
    }

    set bypassReport(data: IBypassSheet | null) {
        this.bypassReportRepository.save(data);
        this.persistReport(data);
        if (data && this.bypassReport) {
            this.bypassReport.lastUpdate = Date.now();
        }
    }

}

export const bypassReportModel = new BypassReportModel(storage);
