import { observer } from 'mobx-react';
import React, { FC, useMemo } from 'react';
import { useUiContext } from '../../../../UIProvider';
import { ScreenContainer } from '../../../../UIKit/screenContainer';
import { DashboardHeader } from '../../../dashboard/ui/components/dashboardHeader';
import { MainButton } from '../../../../UIKit/mainButton';
import { ProfileWrapper } from '../components/profileWrapper';
import { SettingsItem } from '../components/settingsItem';
import { getStyle } from './styles';
import { LanguageIcon } from '../../../../../assets/icons/LanguageIcon';
import { UseSetting } from '../../presenter/useSettings';
import { SunIcon } from '../../../../../assets/icons/sunIcon';
import { MoonIcon } from '../../../../../assets/icons/moonIcon';

export const SettingsView: FC = observer(() => {
    const { t, colors } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);
    const { isEnabled, activeLanguage,activeTheme, handleTheme, LogOut, getSelectLanguage } = UseSetting();

    return (
        <ScreenContainer containerStyle={styles.container} edges={['bottom']} headerComponent={<DashboardHeader title={t('settings')} />}>
            <ProfileWrapper />
            <SettingsItem icon={!isEnabled ? <SunIcon /> : <MoonIcon />} title={t('theme')} text={activeTheme} switchV={true} value={isEnabled} onSwitchValueChange={handleTheme} />
            <SettingsItem icon={<LanguageIcon />} title={t('language')} switchV={false} arrow activeLanguage={activeLanguage} onPress={getSelectLanguage} />
            <MainButton title={'log out'} onPress={LogOut} />
        </ScreenContainer>
    );
});