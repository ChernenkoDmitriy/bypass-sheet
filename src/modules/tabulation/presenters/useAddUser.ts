import { useFocusEffect } from "@react-navigation/native";
import { useCallback, useEffect, useState } from "react";
import { useGetUserListUseCase } from "../useCase/useGetUserListUseCase";
import { useAddUserUseCase } from "../useCase/useAddUserUseCase";
import { useShowToast } from "../../shared/hooks/useShowToast";

export const UseAddUser = () => {
    const [search, setSearch] = useState('');
    const [containerListRefresh, setContainerListRefresh] = useState(false);
    const { showSuccess } = useShowToast();

    useFocusEffect(
        useCallback(() => {
            getUserList();
        }, [])
    );

    useEffect(() => {
        useGetUserListUseCase(0, search);
    }, [search]);

    const onRefresh = () => {
        setContainerListRefresh(true);
        getUserList();
        setContainerListRefresh(false);
    };

    const getUserList = async () => await useGetUserListUseCase(0);

    const addUser = async (company_id: number, members: number[]) => {
        await useAddUserUseCase(company_id, members);
        showSuccess('isSuccessInvite');
    };

    return { search, containerListRefresh, onRefresh, setSearch, getUserList, addUser }
};