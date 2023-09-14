interface ISettings {
    role: string | null;
    status: string;
}

export interface ICompany {
    id: number;
    name: string;
    avatar: string | null;
    offset: number | 0;
    settings: ISettings[];
};