import React, { FC, useCallback, useMemo } from "react";
import { useUiContext } from "../../../../UIProvider";
import { getStyle } from "./style";
import { FlatList, Text, View } from 'react-native'
import { AdminButton } from "../components/adminButtonItem";
import { useTabulation } from "../../presenters/useTabulation";
import { observer } from "mobx-react";
import { AddUserIcon } from "../../../../../assets/icons/AddUserIcon";
import { TimeIcon } from "../../../../../assets/icons/TimeIcon";
import { MembersListItem } from "../components/membersListItem";
import { AddOfficeIcon } from "../../../../../assets/icons/addOfficeIcon";
import { companyModel } from "../../../../entities/company/CompanyModel";

export const AdminTabulationView: FC = observer(() => {
    const { colors, t } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);
    const { containerListRefresh, onRefresh, onWorkShift, onAddUser, deleteMember , onOpenListAddress } = useTabulation();

    const renderItem = useCallback(({ item }: any) => <MembersListItem  deleteMember={deleteMember} membersListItem={item} />, []);
    const keyExtractor = useCallback((item: { user_id: string }) => item.user_id, []);

    return (
        <View style={styles.container}>
            <View style={styles.buttonWrapper}>
                <AdminButton icon={<AddUserIcon color={colors.icon} />} onPress={onAddUser} />
                <AdminButton icon={<TimeIcon color={colors.icon} />} onPress={onWorkShift} />
                <AdminButton icon={<AddOfficeIcon color={colors.icon} />} onPress={onOpenListAddress} />
                {/* <AdminButton icon={<TimeIcon color={colors.icon} />} onPress={onWorkShift} /> */}
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