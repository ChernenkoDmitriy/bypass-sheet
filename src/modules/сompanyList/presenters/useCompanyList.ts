import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useCallback } from "react";
import { useCompanyListUseCase } from "../useCase/useCompanyListUseCase";
import { userModel } from "../../shared/entities/user/userModel";
import { useDeleteCompanyUseCase } from "../useCase/useDeleteCompanyUseCase";

export const useCompanyList = () => {
    const navigation = useNavigation<StackNavigationProp<any>>();
    useFocusEffect(
        useCallback(() => {
            getCompanyList();
        }, [])
    );

    const deleteCompany = async (id: number) => {
        const { message } = await useDeleteCompanyUseCase(id);
        await useCompanyListUseCase(Number(userModel.user?.id));
    };

    const getCompanyList = async () => {
        const { message } = await useCompanyListUseCase(Number(userModel.user?.id));
    };

    const getEditCompany = (id: number , companyName: string) => {
        navigation.navigate('EditCompanyView', { id: id , companyName : companyName});
    };

    const onConnectToCompany = () => navigation.navigate('ConnectToCompanyView');
    const onCreateCompany = () => navigation.navigate('CreateCompanyView');
    return { onConnectToCompany, onCreateCompany, deleteCompany ,getEditCompany}
};