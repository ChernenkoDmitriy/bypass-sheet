export interface IUser {
    token: string;
    id: string;
    phone: string;
    email: string | null;
    avatar: string | null;
    first_name: string | null;
    last_name: string | null;
    latitude: number;
    longitude: number;
};