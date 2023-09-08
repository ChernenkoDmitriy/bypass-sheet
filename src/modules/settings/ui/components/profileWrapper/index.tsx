import { observer } from 'mobx-react';
import React, { FC, useMemo } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useUiContext } from '../../../../../UIProvider';
import { getStyle } from './styles';
import { View, Text, TouchableOpacity } from 'react-native';
import { ProfileIcon } from '../../../../../../assets/icons/inputs/ProfileIcon';
import { userModel } from '../../../../shared/entities/user/userModel';
import { scaleVertical } from '../../../../../utils/Utils';
import { IUser } from '../../../../shared/entities/user/IUser';

interface IProps {
    user: IUser | null;
};

export const ProfileWrapper: FC<IProps> = ({user}) => {
    const { t, colors } = useUiContext();
    const navigation = useNavigation<StackNavigationProp<any>>();
    const styles = useMemo(() => getStyle(colors), [colors]);

    return (
        <TouchableOpacity style={styles.container}>
            <ProfileIcon width={scaleVertical(65)} height={scaleVertical(65)} />
            <View>
                <Text style={styles.text}>{user?.last_name} {user?.first_name}</Text>
                <Text style={styles.text}>{user?.phone}</Text>
            </View>
        </TouchableOpacity>
    );
};