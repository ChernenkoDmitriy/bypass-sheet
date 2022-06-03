import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { observer } from 'mobx-react';
import { LaunchAppView } from '../../../modules/launchApp/ui';
import { BypassSheetListView } from '../../../modules/bypassSheetList/ui';
import { BypassSheetCreateView } from '../../../modules/bypassSheetCreate/ui';
import { BypassSheetView } from '../../../modules/bypassSheet/ui';
import { BypassCompanyView } from '../../../modules/bypassCompany/ui';

const Stack = createStackNavigator();

export const StackNavigator: FC = observer(() => {

    return (
        <Stack.Navigator initialRouteName='LaunchAppView' screenOptions={{ headerShown: false }} >
            <Stack.Screen name='LaunchAppView' component={LaunchAppView} />
            <Stack.Screen name='BypassSheetListView' component={BypassSheetListView} />
            <Stack.Screen name='BypassCompanyView' component={BypassCompanyView} />
            <Stack.Screen name='BypassSheetCreateView' component={BypassSheetCreateView} />
            <Stack.Screen name='BypassSheetView' component={BypassSheetView} />
        </Stack.Navigator >
    );
})
