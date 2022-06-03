import { observer } from 'mobx-react';
import React, { FC, useMemo } from 'react';
import { useUiContext } from '../../../src/UIProvider';
import { ScreenContainer } from '../../shared/ui/screenContainer';
import { useSettings } from '../presenters/useSettings';
import { ChoseLanguage } from './components/choseLanguage';
import { ChoseTheme } from './components/choseTheme';
import { SettingsHeader } from './components/settingsHeader';
import { SignOutButton } from './components/signOutButton';
import { UserInfo } from './components/userInfo';
import { getStyle } from './styles';

export const SettingsView: FC = observer(() => {
    const { colors, t } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);
    const { onGoBack, onChangeLanguage, onChangeTheme, onSignOut } = useSettings();

    return (
        <ScreenContainer>
            <SettingsHeader onClose={onGoBack} />
            <UserInfo />
            <ChoseLanguage onChangeLanguage={onChangeLanguage} />
            <ChoseTheme onChangeTheme={onChangeTheme} />
            <SignOutButton onSignOut={onSignOut} />
        </ScreenContainer>
    )
})
