import { useEffect } from "react";
import { useTimeSheetAdminUseCase } from "../useCase/useTimeSheetAdminUseCase";
import { companyModel } from "../../../entities/company/CompanyModel";
import { membersModel } from "../../../entities/members/MembersModel";

export const UseMembersProfile = () => {
    useEffect(()=>{
        getTimeSheetAdmin();
    },[])

    const getTimeSheetAdmin = async () => {
        await useTimeSheetAdminUseCase(companyModel.chosenCompany?.id || 0, membersModel.chosenMember?.user_id || 0, 1693980001709, 16939800017090);
    };
};