import { observer } from 'mobx-react';
import React, { FC, useMemo, useState } from 'react';
import { useUiContext } from '../../../../UIProvider';
import { ScreenContainer } from '../../../../UIKit/screenContainer';
import { DashboardHeader } from '../../../dashboard/ui/components/dashboardHeader';
import { SettingsItem } from '../components/settingsItem';
import { getStyle } from './styles';

export const SelectLanguageView: FC = observer(() => {
    const { t, colors, setLocale } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);
    const [selectedLanguage, setSelectedLanguage] = useState<string>('en');

    const handleLocaleChangeUk = () => {
        const locale = 'uk';
        setLocale(locale);
    };

    const handleLocaleChangeEn = () => {
        const locale = 'en';
        setLocale(locale);
    };

    return (
        <ScreenContainer containerStyle={styles.container} edges={['bottom']} headerComponent={<DashboardHeader title={t('language')} />}>
            <SettingsItem title={t('ukrainian')} switchV={false} onPress={handleLocaleChangeUk} />
            <SettingsItem title={t('english')} switchV={false} onPress={handleLocaleChangeEn} />
        </ScreenContainer>
    );
});