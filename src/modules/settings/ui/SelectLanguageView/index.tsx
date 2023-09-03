import { observer } from 'mobx-react';
import React, { FC, useMemo } from 'react';
import { useUiContext } from '../../../../UIProvider';
import { ScreenContainer } from '../../../../UIKit/screenContainer';
import { DashboardHeader } from '../../../dashboard/ui/components/dashboardHeader';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { SettingsItem } from '../components/settingsItem';
import { getStyle } from './styles';

export const SelectLanguageView: FC = observer(() => {
    const { t, colors, setLocale } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);
    const navigation = useNavigation<StackNavigationProp<any>>();

    const handleLocaleChangeUk = () => {
        const locale = 'uk';
        setLocale(locale);
        navigation.reset({
            index: 0,
            routes: [{ name: 'TabNavigator' }],
        });
    };

    const handleLocaleChangeEn = () => {
        const locale = 'en';
        setLocale(locale);
        navigation.reset({
            index: 0,
            routes: [{ name: 'TabNavigator' }],
        });
    };

    return (
        <ScreenContainer containerStyle={styles.container} edges={['bottom']} headerComponent={<DashboardHeader title={t('language')} />}>
            <SettingsItem title={t('ukrainian')} switchV={false} onPress={handleLocaleChangeUk} />
            <SettingsItem title={t('english')} switchV={false} onPress={handleLocaleChangeEn} />
        </ScreenContainer>
    );
});