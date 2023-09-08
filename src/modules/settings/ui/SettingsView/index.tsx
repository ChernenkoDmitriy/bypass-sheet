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
import { userModel } from '../../../shared/entities/user/userModel';
import { Text, View } from 'react-native';
import { companyModel } from '../../../shared/entities/company/CompanyModel';

export const SettingsView: FC = observer(() => {
    const { t, colors } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);
    const { isEnabled, activeLanguage, activeTheme, handleTheme, LogOut, getSelectLanguage, onChangeCompany , openHistory } = UseSetting();

    return (
        <ScreenContainer containerStyle={styles.container} edges={['bottom']} headerComponent={<DashboardHeader isBackAvailable={false} title={t('settings')} />}>
            <ProfileWrapper user={userModel.user} />
            <SettingsItem icon={!isEnabled ? <SunIcon /> : <MoonIcon color={colors.icon} />} title={t('theme')} text={activeTheme} switchV={true} value={isEnabled} onSwitchValueChange={handleTheme} />
            <SettingsItem icon={<LanguageIcon color={colors.icon} />} title={t('language')} switchV={false} arrow activeLanguage={activeLanguage} onPress={getSelectLanguage} />
            <View style={styles.buttonWrapper}>
                {companyModel.chosenCompany && companyModel.chosenCompany.settings[0].role !== 'admin'
                    ? <Text style={styles.buttonText} onPress={openHistory}>{t('history')}</Text>
                    : null
                }
                <MainButton title={t('changeCompany')} onPress={onChangeCompany} containerStyle={styles.button} />
                <MainButton title={t('logOut')} onPress={LogOut} />
            </View>
        </ScreenContainer>
    );
});