import React, { FC, useCallback, useMemo, useState } from "react";
import { useUiContext } from "../../../../UIProvider";
import { ScreenContainer } from "../../../../UIKit/screenContainer";
import { getStyle } from "./style";
import { DashboardHeader } from "../../../dashboard/ui/components/dashboardHeader";
import { FlatList, Text, View } from 'react-native'
import { AdminButton } from "../components/adminButtonItem";
import { useTabulation } from "../../presenters/useTabulation";
import { observer } from "mobx-react";
import { InviteIcon } from "../../../../../assets/icons/InviteIcon";
import { AddUserIcon } from "../../../../../assets/icons/AddUserIcon";
import { TimeIcon } from "../../../../../assets/icons/TimeIcon";
import { companyModel } from "../../../shared/entities/company/CompanyModel";
import { UserListItem } from "../components/userListItem";
import { MembersListItem } from "../components/membersListItem";
import { appStateModel } from "../../../shared/entities/appState/AppStateModel";
import { LoadingView } from "../../../shared/ui/loadingView";

export const AdminTabulationView: FC = observer(() => {
    const { colors, t } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);
    const { containerListRefresh, onRefresh, onWorkShift, onAddUser, getMembers, deleteMember } = useTabulation();

    const renderItem = useCallback(({ item }: any) => <MembersListItem deleteMember={deleteMember} membersListItem={item} />, []);
    const keyExtractor = useCallback((item: { user_id: string }) => item.user_id, []);

    return (
        <View style={styles.container}>
            <View style={styles.buttonWrapper}>
                <AdminButton icon={<AddUserIcon color={colors.icon} />} onPress={onAddUser} />
                <AdminButton icon={<TimeIcon color={colors.icon} />} onPress={onWorkShift} />
                <AdminButton icon={<TimeIcon color={colors.icon} />} onPress={onWorkShift} />
                <AdminButton icon={<TimeIcon color={colors.icon} />} onPress={onWorkShift} />
            </View>
            <Text style={styles.title}>{t('members')}</Text>
            <FlatList
                refreshing={containerListRefresh}
                onRefresh={onRefresh}
                showsVerticalScrollIndicator={false}
                data={companyModel.companyListMembers}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
            />
        </View>
    );
});