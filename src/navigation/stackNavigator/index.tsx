import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { observer } from 'mobx-react';
import { LaunchAppView } from '../../modules/launchApp/ui';
import { DashboardView } from '../../modules/dashboard/ui';
import { BypassSheetCreateView } from '../../modules/bypassSheetCreate/ui';
import { BypassSheetView } from '../../modules/reportList/ui';
import { BypassCompanyView } from '../../modules/company/ui';
import { ProfileView } from '../../modules/profile/ui';
import { AuthorizationView } from '../../modules/authentication/ui/AuthorizationView';
import { RegistrationView } from '../../modules/authentication/ui/RegistrationView';
import { ForgottenPasswordView } from '../../modules/authentication/ui/ForgottenPasswordView';
import { CompanyListView } from '../../modules/сompanyList/ui/CompanyListView';

const Stack = createStackNavigator();

export const StackNavigator: FC = observer(() => {
    return (
        <Stack.Navigator initialRouteName='LaunchAppView' screenOptions={{ headerShown: false }} >
            <Stack.Screen name='LaunchAppView' component={LaunchAppView} />
            <Stack.Screen name='AuthorizationView' component={AuthorizationView} />
            <Stack.Screen name='RegistrationView' component={RegistrationView} />
            <Stack.Screen name='ForgottenPasswordView' component={ForgottenPasswordView} />
            <Stack.Screen name='CompanyListView' component={CompanyListView} />
            <Stack.Screen name='DashboardView' component={DashboardView} />
            <Stack.Screen name='BypassCompanyView' component={BypassCompanyView} />
            <Stack.Screen name='BypassSheetCreateView' component={BypassSheetCreateView} />
            <Stack.Screen name='BypassSheetView' component={BypassSheetView} />
            <Stack.Screen name='ProfileView' component={ProfileView} options={{ presentation: 'modal' }} />
        </Stack.Navigator >
    );
})
