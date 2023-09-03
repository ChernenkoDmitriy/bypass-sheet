import React, { FC } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useUiContext } from '../../UIProvider';
import { scaleVertical } from '../../utils/Utils';
import { SettingsView } from '../../modules/settings/ui/SettingsView';
import { CompanyListView } from '../../modules/сompanyList/ui/CompanyListView';
import { DashboardView } from '../../modules/dashboard/ui';
import { ProfileIcon } from '../../../assets/icons/ProffileIcon';

const Tab = createBottomTabNavigator();
const { t } = useUiContext();

export const TabNavigator: FC = () => {
    const { colors } = useUiContext();

    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarShowLabel: true,
            tabBarHideOnKeyboard: true,
            tabBarStyle: {
                height: scaleVertical(50),
                backgroundColor: colors.buttonText,
                borderTopColor: colors.buttonText,
                paddingBottom:scaleVertical(5)
            },
        }}>
            <Tab.Screen name={t("dashboard")} component={DashboardView} />
            <Tab.Screen name={t("company")} component={CompanyListView} />
            <Tab.Screen name={t("profile")} component={SettingsView} options={{ tabBarIcon: ({ focused }) => <ProfileIcon color={focused ? colors.text : colors.icon} /> }} />
        </Tab.Navigator>
    );
};