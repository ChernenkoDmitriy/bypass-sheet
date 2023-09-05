import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useCallback } from "react";
import { useListWorkShiftUseCase } from "../useCase/useListWorkShiftUseCase";
import { companyModel } from "../../shared/entities/company/CompanyModel";
import { useDeleteWorkShiftUseCase } from "../useCase/useDeleteWorkShiftUseCase";
import { StackNavigationProp } from "@react-navigation/stack";
import { Alert } from "react-native";
import { useUiContext } from "../../../UIProvider";
import { useGetUserListUseCase } from "../useCase/useGetUserListUseCase";

export const UseAddUser = () => {
    const navigation = useNavigation<StackNavigationProp<any>>();
    const { t } = useUiContext();

    useFocusEffect(
        useCallback(() => {
            getUserList();
        }, [])
    );

    const getUserList = async () => {
        const { message } = await useGetUserListUseCase(0);
    };

    return { getUserList  }
};