import React, { FC, useCallback, useMemo, useState } from "react";
import { useUiContext } from "../../../../UIProvider";
import { ScreenContainer } from "../../../../UIKit/screenContainer";
import { getStyle } from "./style";
import { DashboardHeader } from "../../../dashboard/ui/components/dashboardHeader";
import { Search } from "../../../../UIKit/search";
import { UseAddUser } from "../../presenters/useAddUser";
import { FlatList } from "react-native";
import { userModel } from "../../../shared/entities/user/userModel";
import { UserListItem } from "../components/userListItem";
import { observer } from "mobx-react";

export const AddUserView: FC = observer(() => {
    const { colors, t } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);
    const { search, containerListRefresh,onRefresh, setSearch, addUser } = UseAddUser();

    const renderItem = useCallback(({ item }: any) => <UserListItem  addUser={addUser} userListItem={item} />, []);
    const keyExtractor = useCallback((item: { id: string }) => item.id, []);

    return (
        <ScreenContainer edges={['bottom']} containerStyle={styles.container} headerComponent={<DashboardHeader title={t('addUser')} isBackAvailable={true} />}>
            <Search
                value={search}
                onChangeText={setSearch}
            />
            <FlatList
                refreshing={containerListRefresh}
                onRefresh={onRefresh}
                showsVerticalScrollIndicator={false}
                data={userModel.userList}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
            />
        </ScreenContainer>
    );
});