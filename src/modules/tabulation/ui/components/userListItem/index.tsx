import React, { FC, useMemo } from "react";

import { getStyle } from "./style";
import { TouchableOpacity, Text, View } from 'react-native';
import { useUiContext } from "../../../../../UIProvider";
import { IUser } from "../../../../shared/entities/user/IUser";
import { ProfileIcon } from "../../../../../../assets/icons/inputs/ProfileIcon";
import { AddUserIcon } from "../../../../../../assets/icons/AddUserIcon";
import { LogoPicker } from "../../../../../UIKit/logoPicker";
import { InviteIcon } from "../../../../../../assets/icons/InviteIcon";
import { observer } from "mobx-react";
import { companyModel } from "../../../../shared/entities/company/CompanyModel";

interface IProps {
    userListItem: IUser;
    addUser?: (company_id: number, members: number[]) => void;
};

export const UserListItem: FC<IProps> = observer(({ userListItem, addUser }) => {
    const { colors } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);

    return (
        <TouchableOpacity style={styles.container} >
            <View style={styles.informationWrapper}>
                <LogoPicker logo={userListItem.avatar} name={userListItem.first_name || undefined} />
                <View style={styles.titleWrapper}>
                    <Text style={styles.text}>{userListItem.first_name} {userListItem.last_name}</Text>
                    <Text style={styles.text}>Phone Number</Text>
                </View>
                <TouchableOpacity style={styles.button} onPress={() => addUser?.(companyModel.chosenCompany?.id || 0 ,[ Number(userListItem.id)])}>
                    <AddUserIcon color={colors.icon} />
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    );
});