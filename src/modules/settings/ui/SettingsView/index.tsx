import { observer } from 'mobx-react';
import React, { FC, useMemo } from 'react';
import { useUiContext } from '../../../../UIProvider';
import { ScreenContainer } from '../../../../UIKit/screenContainer';
import { DashboardHeader } from '../../../dashboard/ui/components/dashboardHeader';
import { MainButton } from '../../../../UIKit/mainButton';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { userModel } from '../../../shared/entities/user/userModel';

export const SettingsView: FC = observer(() => {
    const { t } = useUiContext();
    const navigation = useNavigation<StackNavigationProp<any>>();

    const LogOut = () => {
        userModel.clear();
        navigation.navigate('AuthorizationView');
    };

    return (
        <ScreenContainer edges={['bottom']} headerComponent={<DashboardHeader />}>
            <MainButton title={'log out'} onPress={LogOut} />
        </ScreenContainer>
    );
});