import React, { FC, memo, useMemo } from "react";

import { getStyle } from "./style";
import { TouchableOpacity, Text, View } from 'react-native';
import { useUiContext } from "../../../../../UIProvider";
import { LogoPicker } from "../../../../../UIKit/logoPicker";
import { IMembers } from "../../../../shared/entities/company/iMembers";
import { DeleteIcon } from "../../../../../../assets/icons/DeleteIcon";

interface IProps {
    membersListItem: IMembers;
    addUser?: (company_id: number, members: number[]) => void;
    deleteMember: (user_id: number) => void;
};

export const MembersListItem: FC<IProps> = memo(({ membersListItem, deleteMember }) => {
    const { t, colors } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);

    const contentStatus = useMemo(() => {
        if (membersListItem.role === 'admin') {
            return <Text style={styles.absoluteText}>{t('isAdmin')}</Text>
        } else if (membersListItem.status === 'pending') {
            return <Text style={styles.absoluteText}>{t('requestSent')}</Text>
        } else {
            return (
                <TouchableOpacity style={styles.button} onPress={() => deleteMember(membersListItem.user_id)}>
                    <DeleteIcon color={colors.icon} />
                </TouchableOpacity>
            );
        };
    }, [membersListItem]);

    return (
        <TouchableOpacity style={styles.container} >
            <View style={styles.informationWrapper}>
                <LogoPicker logo={membersListItem.user.avatar} name={membersListItem.user.first_name || undefined} />
                <View style={styles.titleWrapper}>
                    <Text style={styles.text}>{membersListItem.user.first_name} {membersListItem.user.last_name}</Text>
                    <Text style={styles.text}>{membersListItem.user.phone}</Text>
                </View>
                {contentStatus}
            </View>
        </TouchableOpacity>
    );
});