import { IBypassItem } from "./IBypassItem";

export interface IBypassSheet {
    title: string;
    address: string;
    id: number;
    lastUpdate?: number;
    items: IBypassItem[];
}