import React, { FC, useMemo } from "react";
import { ScreenContainer } from "../../../../UIKit/screenContainer";
import { Text, View } from 'react-native'
import { useUiContext } from "../../../../UIProvider";
import { getStyle } from "./style";
import { MainInput } from "../../../../UIKit/mainInput";
import { MainButton } from "../../../../UIKit/mainButton";
import { HeaderWithBackButton } from "../../../shared/ui/headerWithBackButton";
import { useRegistration } from "../../presenters/useRegistration";

export const RegistrationView: FC = () => {
    const { t, colors } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);
    const { firstName, lastName, phonePrefix, isValidLastName, errorLastName, isValid, errorFirstName, errorPhone, phone, isValidFirstName, password, errorPassword, isValidPassword, onFocus, onFirstName, onBlurLastName, onBlurPassword, onLastName, onBlurFirstName, onCreateAccount, setPassword, onBlur, onSetPhone } = useRegistration();

    return (
        <ScreenContainer scrollEnabled containerStyle={styles.container} edges={['bottom']} headerComponent={<HeaderWithBackButton title={t('registration')} />}>
            <View style={styles.container}>
                <Text style={styles.title}>{t('createProfile')}</Text>
                <Text style={styles.text}>{t('personalization')}</Text>
                <MainInput
                    inputWrapperStyle={{ borderBottomColor: isValid ? colors.primary : 'red' }}
                    titleStyle={styles.titleStyle}
                    title={t('workPhoneNumber')}
                    value={phone}
                    maxLength={13}
                    onChangeText={onSetPhone}
                    keyboardType={'phone-pad'}
                    isValid={isValid}
                    onBlur={onBlur}
                    errorText={errorPhone}
                    onSubmitEditing={onCreateAccount}
                    onFocus={onFocus}
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
                    inputWrapperStyle={{ borderBottomColor: isValidFirstName ? colors.primary : 'red' }}
                    title={t('firstName')}
                    keyboardType='twitter'
                    value={firstName}
                    onBlur={onBlurFirstName}
                    isValid={isValidFirstName}
                    onChangeText={onFirstName}
                    errorText={errorFirstName}
                    onSubmitEditing={onCreateAccount}
                />
                <MainInput
                    inputWrapperStyle={{ borderBottomColor: isValidLastName ? colors.primary : 'red' }}
                    title={t('lastName')}
                    keyboardType='twitter'
                    value={lastName}
                    onBlur={onBlurLastName}
                    isValid={isValidLastName}
                    onChangeText={onLastName}
                    errorText={errorLastName}
                    onSubmitEditing={onCreateAccount}
                />
                <MainButton containerStyle={styles.button} title={t("createAnAccount")} onPress={onCreateAccount} />
                <Text style={styles.policyText}>{t('policy')}</Text>
            </View>
        </ScreenContainer>
    );
};