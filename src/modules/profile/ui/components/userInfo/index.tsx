import React, { FC, useMemo } from 'react';
import { View, Text } from 'react-native';
import FastImage from 'react-native-fast-image';
import { UserLogoUnknownIcon } from '../../../../../../assets/icons/UserLogoUnknownIcon';
import { useUiContext } from '../../../../../UIProvider';
import { scaleVertical } from '../../../../../utils/Utils';
import { IUser } from '../../../../shared/entities/user/IUser';
import { getStyle } from './styles';

interface IProps {
    user: IUser | null;
}

export const UserInfo: FC<IProps> = ({ user }) => {
    const { colors } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);

    return (
        <View style={styles.container}>
            {user?.photo
                ? <FastImage source={{ uri: user?.photo }} style={styles.avatar} />
                : <UserLogoUnknownIcon color={colors.accentColorLight} width={scaleVertical(32)} height={scaleVertical(32)} />}
            <View style={styles.userInfoContainer}>
                <Text style={styles.userNameText}>{user?.name}</Text>
                <Text style={styles.userEmailText}>{user?.email}</Text>
            </View>
        </View>
    );
};
