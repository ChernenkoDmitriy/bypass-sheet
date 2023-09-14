import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useState } from "react";
import { useTimeSheetAdminUseCase } from "../useCase/useTimeSheetAdminUseCase";
import { companyModel } from "../../../entities/company/CompanyModel";
import { membersModel } from "../../../entities/members/MembersModel";

export const useCalendar = () => {
    const [selectedCustomDate, setSelectedCustomDate] = useState<{ endDate: number, startDate: number } | null>(null);
    const [isDisableButton, setIsDisableButton] = useState<boolean>(true);
    const navigation = useNavigation<StackNavigationProp<any>>();

    const toTimestamp = (date: string): number => {
        return new Date(date).getTime();
    };

    const isDisableSaveButton = (endDate: number, startDate: number) => {
        const now = new Date().getTime();

        if (startDate < now && endDate < now) {
            if (startDate !== 0 && endDate !== 0 && startDate !== endDate) {
                setIsDisableButton(false);
            } else {
                setIsDisableButton(true);
            };
        } else {
            setIsDisableButton(true);
        };
    };

    const onChangeDate = (date: { endDate: string, startDate: string }) => {
        const endDate = toTimestamp(date.endDate);
        const startDate = toTimestamp(date.startDate);
        isDisableSaveButton(endDate, startDate);
        setSelectedCustomDate({ endDate, startDate });
    };

    const onCancel = () => navigation.goBack();

    const onSaveCustomDate = async () => {
        await useTimeSheetAdminUseCase(companyModel.chosenCompany?.id || 0, membersModel.chosenMember?.user_id || 0, selectedCustomDate?.startDate || 0, selectedCustomDate?.endDate || 0);
        await navigation.goBack();
    };

    return { isDisableButton, onChangeDate, onSaveCustomDate, onCancel };
};