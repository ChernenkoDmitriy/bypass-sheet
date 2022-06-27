import { IBypassSheet } from "./IBypassSheet";

export interface IBypassCompany {
    title: string;
    address: string;
    id: number;
    items: IBypassSheet[];
    reportName: string | null;
    lastUpdate: number | null;
}