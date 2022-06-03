import { observer } from 'mobx-react';
import React, { FC, useMemo } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { configModel } from '../../../../../src/config';
import { useUiContext } from '../../../../../src/UIProvider';
import { userModel } from '../../../../shared/entities/user/User';
import { LogoPicker } from '../../../../shared/ui/logoPicker';
import { useUserProfile } from '../../../presenters/useUserProfile';
import { getStyle } from './styles';

export const UserInfo: FC = observer(({ }) => {
    const { colors } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);
    const { onSelectUserAvatar } = useUserProfile();
    const userAvatar = userModel.user?.avatar ? configModel.LINKS.HOST_IMAGES + userModel.user?.avatar : '';

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.avatarContainer}>
                <LogoPicker cropping logo={userAvatar} onSaveLogo={onSelectUserAvatar} containerStyle={styles.avatar} />
            </TouchableOpacity>
            <View style={styles.userInfoContainer}>
                <Text style={styles.userNameText}>{userModel.user?.first_name} {userModel.user?.last_name}</Text>
                <Text style={styles.userEmailText}>{userModel.user?.email}</Text>
            </View>
        </View>
    );
});
