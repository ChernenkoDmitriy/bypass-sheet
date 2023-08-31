import React, { FC, useMemo, useState } from "react";
import { useUiContext } from "../../../../UIProvider";
import { ScreenContainer } from "../../../../UIKit/screenContainer";
import { getStyle } from "./style";
import { Image, TouchableOpacity, Text, View } from "react-native";
import { MainInput } from "../../../../UIKit/mainInput";
import { MainButton } from "../../../../UIKit/mainButton";
import { UseAuthorization } from "../../presenters/useAuthorization";

const LOGO = require('../../../../../assets/img/logo.png')

export const AuthorizationView: FC = () => {
    const { colors, t } = useUiContext();
    const { isValid, errorPhone, phone, password, phonePrefix, errorPassword, isValidPassword, onBlurPassword, onContinue, setPassword, onBlur, onSetPhone, onRegistration, onForgottenPassword } = UseAuthorization();
    const styles = useMemo(() => getStyle(colors, isValid, isValidPassword), [colors, isValid, isValidPassword]);

    return (
        <ScreenContainer containerStyle={styles.container}>
            <Text style={styles.title}>{t('signIn')}</Text>
            <MainInput
                inputWrapperStyle={{ borderBottomColor: isValid ? colors.primary : 'red' }}
                title={t('phoneNumber')}
                value={phone}
                defaultPrefix={phonePrefix}
                maxLength={9}
                onChangeText={onSetPhone}
                keyboardType={'phone-pad'}
                isValid={isValid}
                onBlur={onBlur}
                errorText={errorPhone}
            />
            <MainInput
                inputWrapperStyle={{ borderBottomColor: isValidPassword ? colors.primary : 'red' }}
                secureTextEntry
                value={password}
                isValid={isValidPassword}
                onBlur={onBlurPassword}
                onChangeText={setPassword}
                errorText={errorPassword}
                title={t('password')}
                onSubmitEditing={onContinue}
            />
            {/* <TouchableOpacity style={styles.button} onPress={onForgottenPassword}>
                <Text style={styles.text}>
                    {t('forgottenPassword')}
                </Text>
            </TouchableOpacity> */}
            <View style={styles.buttonWrapper}>
                <MainButton title={t('continue')} onPress={onContinue} />
                {/* <MainButton containerStyle={styles.buttonRegistered} title={t('registration')} onPress={onRegistration} /> */}
                <TouchableOpacity style={styles.buttonRegistered} onPress={onRegistration}>
                    <Text style={styles.text}>
                        {t('registration')}
                    </Text>
                </TouchableOpacity>
                <Image
                source={LOGO}
                style={styles.logo}
            />
            </View>
        </ScreenContainer>
    );
};