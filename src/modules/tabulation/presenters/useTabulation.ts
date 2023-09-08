import { useFocusEffect, useNavigation } from "@react-navigation/native"
import { useCallback, useState } from "react";
import { googleSignInModule } from "../../../../libs/google/googleSignIn/GoogleSignInModule";
import { userModel } from "../../shared/entities/user/userModel";
import { StackNavigationProp } from "@react-navigation/stack";
import { useGetMembersUseCase } from "../../сompanyList/useCase/useGetMembersUseCase";
import { companyModel } from "../../shared/entities/company/CompanyModel";
import { useDeleteMemberUseCase } from "../useCase/useDeleteMemberUseCase";
import { appStateModel } from "../../shared/entities/appState/AppStateModel";
import { IUser } from "../../shared/entities/user/IUser";
import { IMembers } from "../../shared/entities/members/IMembers";

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