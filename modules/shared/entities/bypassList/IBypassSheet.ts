import { IBypassItem } from "./IBypassItem";

export interface IBypassSheet {
    title: string;
    id: number;
    lastUpdate?: number;
    items: IBypassItem[];
}