import { IUser } from "../user/IUser";

export interface IMembers {
    user_id: number;
    role: 'admin' | null;
    status: 'pending' | 'accepted';
    user: IUser;
}