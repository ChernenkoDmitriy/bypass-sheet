import React, { FC, useEffect } from 'react';
import { KeyboardAvoidingView, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from '../stackNavigator';
import { observer } from 'mobx-react';
import { isIOS } from '../../utils/Utils';
import { useUiContext } from '../../UIProvider';
import { LoadingView } from '../../modules/shared/ui/loadingView';
import { InternetConnection } from '../../UIKit/internetConnection';
import { Logger } from '../../UIKit/logger/ui/logger';
import { userModel } from '../../modules/shared/entities/user/userModel';
import { loggerModel } from '../../UIKit/logger/entity/loggerModel';
import Toast from 'react-native-toast-message';
import { ToastView } from '../../UIKit/toast';

export const RootNavigator: FC = observer(() => {
    const { colors, theme } = useUiContext();
    userModel;

    useEffect(() => {
        loggerModel.add('response', 'token: ', '');
        console.log('token: ', userModel.token);
    }, [userModel.token]);

    return (
        <KeyboardAvoidingView style={{ flex: 1, backgroundColor: colors.background }} behavior={isIOS ? 'padding' : undefined}>
            <StatusBar backgroundColor={colors.background} barStyle={theme === 'dark' ? 'light-content' : 'dark-content'} />
            <NavigationContainer>
                <StackNavigator />
            </NavigationContainer>
            <Logger />
            <Toast config={{ success: (props) => <ToastView {...props} />, error: (props) => <ToastView error {...props} /> }} />
            <InternetConnection />
            <LoadingView />
        </KeyboardAvoidingView>
    );
});
