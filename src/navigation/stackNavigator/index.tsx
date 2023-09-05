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
import { ConnectToCompanyView } from '../../modules/сompanyList/ui/ConnectToCompanyView';
import { CreateCompanyView } from '../../modules/сompanyList/ui/CreateCompanyView';
import { SettingsView } from '../../modules/settings/ui/SettingsView';
import { TabNavigator } from '../tabNavigator';
import { SelectLanguageView } from '../../modules/settings/ui/SelectLanguageView';
import { EditCompanyView } from '../../modules/сompanyList/ui/EditCompanyView';
import { WorkShiftView } from '../../modules/tabulation/ui/workShiftView';
import { CreateWorkShiftView } from '../../modules/tabulation/ui/createWorkShiftView';
import { EditWorkShiftView } from '../../modules/tabulation/ui/editWorkShiftView';
import { AddUserView } from '../../modules/tabulation/ui/addUserView';

const Stack = createStackNavigator();

export const StackNavigator: FC = observer(() => {
    return (
        <Stack.Navigator initialRouteName='LaunchAppView' screenOptions={{ headerShown: false }} >
            <Stack.Screen name='TabNavigator' component={TabNavigator} />
            <Stack.Screen name='LaunchAppView' component={LaunchAppView} />
            <Stack.Screen name='AuthorizationView' component={AuthorizationView} />
            <Stack.Screen name='RegistrationView' component={RegistrationView} />
            <Stack.Screen name='ForgottenPasswordView' component={ForgottenPasswordView} />
            <Stack.Screen name='CompanyListView' component={CompanyListView} />
            <Stack.Screen name='ConnectToCompanyView' component={ConnectToCompanyView} />
            <Stack.Screen name='CreateCompanyView' component={CreateCompanyView} />
            <Stack.Screen name='EditCompanyView' component={EditCompanyView} />
            <Stack.Screen name='SettingsView' component={SettingsView} />
            <Stack.Screen name='SelectLanguageView' component={SelectLanguageView} />
            <Stack.Screen name='DashboardView' component={DashboardView} />
            <Stack.Screen name='BypassCompanyView' component={BypassCompanyView} />
            <Stack.Screen name='BypassSheetCreateView' component={BypassSheetCreateView} />
            <Stack.Screen name='BypassSheetView' component={BypassSheetView} />
            <Stack.Screen name='WorkShiftView' component={WorkShiftView} />
            <Stack.Screen name='CreateWorkShiftView' component={CreateWorkShiftView} />
            <Stack.Screen name='EditWorkShiftView' component={EditWorkShiftView} />
            <Stack.Screen name='AddUserView' component={AddUserView} />
            <Stack.Screen name='ProfileView' component={ProfileView} options={{ presentation: 'modal' }} />
        </Stack.Navigator >
    );
})
