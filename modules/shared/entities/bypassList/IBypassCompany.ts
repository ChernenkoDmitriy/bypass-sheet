import { IBypassSheet } from "./IBypassSheet";

export interface IBypassCompany {
    title: string;
    id: number;
    items: IBypassSheet[];
    reportName: string | null;
    lastUpdate: number | null;
}