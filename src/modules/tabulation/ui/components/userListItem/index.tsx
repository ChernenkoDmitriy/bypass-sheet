import React, { FC, useMemo } from "react";

import { getStyle } from "./style";
import { TouchableOpacity, Text, View } from 'react-native';
import { useUiContext } from "../../../../../UIProvider";
import { IUser } from "../../../../shared/entities/user/IUser";
import { ProfileIcon } from "../../../../../../assets/icons/inputs/ProfileIcon";
import { AddUserIcon } from "../../../../../../assets/icons/AddUserIcon";

interface IProps {
    userListItem: IUser;
};

export const UserListItem: FC<IProps> = ({ userListItem }) => {
    const { colors, t } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);

    return (
        <TouchableOpacity style={styles.container} >
            <View style={styles.informationWrapper}>
                <ProfileIcon />
                <Text style={styles.text}> {userListItem.first_name} {userListItem.last_name}</Text>
                <Text style={styles.text}></Text>
            </View>
            <TouchableOpacity>
                <AddUserIcon color={colors.icon}/>
            </TouchableOpacity>
        </TouchableOpacity>
    );
};