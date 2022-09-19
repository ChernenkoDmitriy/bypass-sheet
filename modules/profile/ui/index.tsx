import { observer } from 'mobx-react';
import React, { FC, useMemo } from 'react';
import { Text, View } from 'react-native';
import { useUiContext } from '../../../src/UIProvider';
import { userModel } from '../../shared/entities/user/userModel';
import { ScreenContainer } from '../../shared/ui/screenContainer';
import { useProfile } from '../presenters/useProfile';
import { ChoseLanguage } from './components/choseLanguage';
import { ProfileHeader } from './components/profileHeader';
import { ProfileInput } from './components/profileInput';
import { SignOutButton } from './components/signOutButton';
import { UserInfo } from './components/userInfo';
import { getStyle } from './styles';

export const ProfileView: FC = observer(() => {
    const { colors, t, setLocale } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);
    const { onGoBack, onSignOut, onChangeGoogleSheetId, onChangeGoogleSheetName } = useProfile();

    return (
        <ScreenContainer scrollEnabled>
            <ProfileHeader onClose={onGoBack} photo={userModel.user?.photo} />
            <UserInfo user={userModel.user} />
            <ProfileInput
                image={require('../../../assets/img/tableId.png')}
                onChangeText={onChangeGoogleSheetId}
                value={userModel.googleSheet.sheetId}
                title={t('googleSheet')}
            />
            <ProfileInput
                image={require('../../../assets/img/tableName.png')}
                onChangeText={onChangeGoogleSheetName}
                value={userModel.googleSheet.sheetName}
                title={t('sheetName')}
            />
            <View style={styles.textWrapper}>
                <Text style={styles.instruction}>{t('googleSheetInstruction')}</Text>
            </View>
            <ChoseLanguage onChangeLanguage={setLocale} />
            <SignOutButton onSignOut={onSignOut} />
        </ScreenContainer>
    )
})
