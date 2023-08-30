import React, { FC, useMemo } from "react";
import { ScreenContainer } from "../../../../UIKit/screenContainer";
import { Text } from 'react-native'
import { useUiContext } from "../../../../UIProvider";
import { getStyle } from "./style";
import { MainInput } from "../../../../UIKit/mainInput";
import { MainButton } from "../../../../UIKit/mainButton";
import { HeaderWithBackButton } from "../../../shared/ui/headerWithBackButton";
import { useRegistration } from "../../presenters/useRegistration";

export const RegistrationView: FC = () => {
    const { t, colors } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);
    const { isValid, phonePrefix, errorPhone, phone, password, errorPassword, isValidPassword, fullName, isValidFullName, errorFullName, onBlurFullName, onFullName, onBlurPassword, onCreateAccount, setPassword, onBlur, onSetPhone } = useRegistration();

    return (
        <ScreenContainer containerStyle={styles.container} headerComponent={<HeaderWithBackButton title={t('registration')} />}>
            <Text style={styles.title}>{t('createProfile')}</Text>
            <Text style={styles.text}>{t('personalization')}</Text>
            <MainInput
                inputWrapperStyle={{ borderBottomColor: isValid ? colors.primary : 'red' }}
                titleStyle={styles.titleStyle}
                title={t('workPhoneNumber')}
                value={phone}
                defaultPrefix={phonePrefix}
                maxLength={9}
                onChangeText={onSetPhone}
                keyboardType={'phone-pad'}
                isValid={isValid}
                onBlur={onBlur}
                errorText={errorPhone}
                onSubmitEditing={onCreateAccount}
            />
            <MainInput
                inputWrapperStyle={{ borderBottomColor: isValidPassword ? colors.primary : 'red' }}
                title={t('addPassword')}
                secureTextEntry
                value={password}
                onBlur={onBlurPassword}
                isValid={isValidPassword}
                onChangeText={setPassword}
                errorText={errorPassword}
                onSubmitEditing={onCreateAccount}
            />
            <MainInput
                inputWrapperStyle={{ borderBottomColor: isValidFullName ? colors.primary : 'red' }}
                title={t('fullName')}
                keyboardType='twitter'
                value={fullName}
                onBlur={onBlurFullName}
                isValid={isValidFullName}
                onChangeText={onFullName}
                errorText={errorFullName}
                onSubmitEditing={onCreateAccount}
            />
            <MainButton containerStyle={styles.button} title={t("createAnAccount")} onPress={onCreateAccount} />
            <Text style={styles.policyText}>{t('policy')}</Text>
        </ScreenContainer>
    );
};