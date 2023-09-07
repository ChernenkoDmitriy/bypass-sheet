import React, { FC, memo, useMemo } from "react";

import { getStyle } from "./style";
import { TouchableOpacity, Text, View } from 'react-native';
import { useUiContext } from "../../../../../UIProvider";
import { LogoPicker } from "../../../../../UIKit/logoPicker";
import { IMembers } from "../../../../shared/entities/members/IMembers";
import { DeleteIcon } from "../../../../../../assets/icons/DeleteIcon";
import { membersModel } from "../../../../shared/entities/members/MembersModel";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";

interface IProps {
    membersListItem: IMembers;
    addUser?: (company_id: number, members: number[]) => void;
    deleteMember: (user_id: number) => void;
};

export const MembersListItem: FC<IProps> = memo(({ membersListItem, deleteMember }) => {
    const { t, colors } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);
    const navigation = useNavigation<StackNavigationProp<any>>();

    const onOpenMember = () => {
        membersModel.chosenMember = membersListItem;
        navigation.navigate('MembersProfileView');
    };

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
        <TouchableOpacity style={styles.container} onPress={onOpenMember}>
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