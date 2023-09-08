import { useFocusEffect } from "@react-navigation/native";
import { useCallback } from "react";
import { useTimeSheetAdminUseCase } from "../useCase/useTimeSheetAdminUseCase";
import { companyModel } from "../../shared/entities/company/CompanyModel";
import { membersModel } from "../../shared/entities/members/MembersModel";

export const UseMembersProfile = () => {
    useFocusEffect(
        useCallback(() => {
            getTimeSheetAdmin();
        }, [])
    );

    const getTimeSheetAdmin = async () => {
        await useTimeSheetAdminUseCase(companyModel.chosenCompany?.id || 0, membersModel.chosenMember?.user_id || 0, 1693980001709, 16939800017090)
    };
};