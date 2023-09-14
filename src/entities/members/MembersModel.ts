import { MobXRepository } from "../../repository/MobXRepository"
import { IMembers } from "./IMembers";

export interface ICompanyModel {
    chosenMember: IMembers | null;
    companyListMembers: IMembers[];
}

class MembersModel implements ICompanyModel {
    private chosenMemberRepository = new MobXRepository<IMembers | null>(null);
    private companyListMembersRepository = new MobXRepository<[]>([]);

    set chosenMember(data: IMembers | null) {
        this.chosenMemberRepository.save(data);
    }

    get chosenMember() {
        return this.chosenMemberRepository.data || null;
    }

    set companyListMembers(data: []) {
        this.companyListMembersRepository.save(data);
    }

    get companyListMembers() {
        return this.companyListMembersRepository.data || [];
    }

    clear = () => {
    }
}

export const membersModel = new MembersModel();