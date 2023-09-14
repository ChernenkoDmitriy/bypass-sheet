import { useFocusEffect, useNavigation } from "@react-navigation/native"
import { useCallback, useState } from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { useGetMembersUseCase } from "../../сompanyList/useCase/useGetMembersUseCase";
import { useDeleteMemberUseCase } from "../useCase/useDeleteMemberUseCase";
import { companyModel } from "../../../entities/company/CompanyModel";
import { IMembers } from "../../../entities/members/IMembers";

export const useTabulation = () => {
    const [containerListRefresh, setContainerListRefresh] = useState(false);
    const navigation = useNavigation<StackNavigationProp<any>>();

    useFocusEffect(
        useCallback(() => {
            getMembers();
        }, [])
    );
    
    const onOpenListAddress = () => navigation.navigate('WorkPlaceListView');

    const onRefresh = () => {
        setContainerListRefresh(true);
        getMembers();
        setContainerListRefresh(false);
    };

    const onWorkShift = () => navigation.navigate('WorkShiftView');
    const onAddUser = () => navigation.navigate('AddUserView');

    const getMembers = async () => {
        await useGetMembersUseCase(Number(companyModel.chosenCompany?.id));
    };

    const deleteMember = async (user_id: number) => {
        await useDeleteMemberUseCase(Number(companyModel.chosenCompany?.id), user_id)
        getMembers();
    };
    const onOpenMember = (member: IMembers) => {
        navigation.navigate('MembersProfileView', { user: member });
    };

    return { containerListRefresh, onRefresh, onWorkShift, onAddUser, getMembers, deleteMember, onOpenMember ,onOpenListAddress };
};