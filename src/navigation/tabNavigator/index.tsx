import React, { FC } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useUiContext } from '../../UIProvider';
import { scaleVertical } from '../../utils/Utils';
import { SettingsView } from '../../modules/settings/ui/SettingsView';
import { CompanyListView } from '../../modules/сompanyList/ui/CompanyListView';
import { DashboardView } from '../../modules/dashboard/ui';
import { ProfileIcon } from '../../../assets/icons/ProffileIcon';
import { TabulationView } from '../../modules/tabulation/ui/TabulationView';
import { HomeIcon } from '../../../assets/icons/HomeIcon';
import { TimeIcon } from '../../../assets/icons/TimeIcon';

const Tab = createBottomTabNavigator();
const { t } = useUiContext();

export const TabNavigator: FC = () => {
    const { colors } = useUiContext();

    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarShowLabel: true,
            tabBarHideOnKeyboard: true,
            tabBarActiveTintColor: colors.primary,

            tabBarStyle: {
                height: scaleVertical(65),
                backgroundColor: colors.background,
                borderTopColor: colors.background,
                paddingTop:scaleVertical(5),
            },
            
        }}>
            <Tab.Screen name={t("dashboard")} component={DashboardView} options={{ tabBarIcon: ({ focused }) => <HomeIcon color={focused ? colors.primary : colors.icon} /> }}/>
            <Tab.Screen name={t("tabulation")} component={TabulationView} options={{ tabBarIcon: ({ focused }) => <TimeIcon color={focused ? colors.primary : colors.icon} /> }}/>
            <Tab.Screen name={t("settings")} component={SettingsView} options={{ tabBarIcon: ({ focused }) => <ProfileIcon color={focused ? colors.primary : colors.icon} /> }} />
        </Tab.Navigator>
    );
};