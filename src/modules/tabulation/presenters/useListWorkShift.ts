import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useCallback, useState } from "react";
import { useListWorkShiftUseCase } from "../useCase/useListWorkShiftUseCase";
import { companyModel } from "../../shared/entities/company/CompanyModel";
import { useDeleteWorkShiftUseCase } from "../useCase/useDeleteWorkShiftUseCase";
import { StackNavigationProp } from "@react-navigation/stack";
import { Alert } from "react-native";
import { useUiContext } from "../../../UIProvider";

export const UseListWorkShift = () => {
    const [containerListRefresh, setContainerListRefresh] = useState(false);
    const navigation = useNavigation<StackNavigationProp<any>>();
    const { t } = useUiContext();

    useFocusEffect(
        useCallback(() => {
            getListWorkShift();
        }, [])
    );

    const onRefresh = () => {
        setContainerListRefresh(true);
        getListWorkShift();
        setContainerListRefresh(false);
    };

    const deleteWorkShift = async (id: number, company_id: number) => {
        Alert.alert(
            t('attention'),
            t('doDelete'),
            [{
                text: t('cancel'),
                onPress: () => null,
                style: 'cancel',
            },
            {
                text: t('continue'),
                onPress: async () => {
                    await useDeleteWorkShiftUseCase(id, company_id);
                    await getListWorkShift();
                },
            },]
        );
    };

    const onCreateWorkShift = () => navigation.navigate('CreateWorkShiftView');

    const onEditWorkShift = (id: number, startTime: string, endTime: string, name: string) => {
        navigation.navigate('EditWorkShiftView', { id: id, startTime: startTime, endTime: endTime, name: name });
    };

    const getListWorkShift = async () => {
        const { message } = await useListWorkShiftUseCase(companyModel.chosenCompany?.id || 0);
    };

    return { containerListRefresh, onRefresh, deleteWorkShift, onEditWorkShift, onCreateWorkShift }
};