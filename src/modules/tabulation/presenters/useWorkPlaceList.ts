import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useWorkPlaceListUseCase } from "../useCase/useWorkPlaceListUseCase"
import { useCallback, useState } from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { useDeleteWorkPlaceUseCase } from "../useCase/useDeleteWorkPlaceUseCase 2";
import { companyModel } from "../../../entities/company/CompanyModel";

export const UseWorkPlaceList = () => {
    const [containerListRefresh, setContainerListRefresh] = useState(false);
    const navigation = useNavigation<StackNavigationProp<any>>();

    useFocusEffect(
        useCallback(() => {
            getWorkPlaceList();
        }, [])
    );

    const onRefresh = () => {
        setContainerListRefresh(true);
        getWorkPlaceList();
        setContainerListRefresh(false);
    };
    const onCreateWorkPlace = () => navigation.navigate('CreateWorkPlaceView');

    const onDeleteWorkPLace = async (id: number, company_id: number) => {
        await useDeleteWorkPlaceUseCase(id, company_id);
        await getWorkPlaceList();
    };

    const onUpdateWorkPlace = () => navigation.navigate('UpdateWorkPlaceView');

    const getWorkPlaceList = async () => {
        await useWorkPlaceListUseCase(companyModel.chosenCompany?.id || 0);
    };

    return { containerListRefresh, getWorkPlaceList, onRefresh, onCreateWorkPlace, onDeleteWorkPLace, onUpdateWorkPlace };
};