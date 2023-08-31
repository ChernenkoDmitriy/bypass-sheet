import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useUiContext } from "../../../UIProvider";
import { authorizationUseCase } from "../useCase/authorizationUseCase";

const phoneNumberRegex = /^\+380\d{6,11}$/;

export const UseAuthorization = () => {
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [isValid, setIsValid] = useState(true);
    const [isValidPassword, setIsValidPassword] = useState(true);
    const [errorPhone, setErrorPhone] = useState('');
    const [errorPassword, setErrorPassword] = useState('');
    const navigation = useNavigation<StackNavigationProp<any>>();
    const { t } = useUiContext();
    const isDisabled = useMemo(() => !phoneNumberRegex.test('+380' + phone), [phone]);
    const isContinue = useMemo(() => isDisabled || !password.length, [phone, password]);
    const phonePrefix = useMemo(() => !phone ? '' : "+380", [phone]);
    const isPassword = useMemo(() => password.length === 0, [password]);

    useEffect(() => {
        if (isPassword) {
            setErrorPassword('');
            setIsValidPassword(true);
        };
    }, [isPassword]);

    useEffect(() => {
        if (!isDisabled) {
            setErrorPhone('');
            setIsValid(true);
        };
    }, [isDisabled]);

    const onBlurPassword = useCallback(() => {
        setIsValidPassword(!isPassword);
        if (isPassword) {
            setErrorPassword(t('passwordError'));
        } else {
            setErrorPassword('');
        };
    }, [isPassword]);

    const onBlur = useCallback(() => {
        setIsValid(!isDisabled);
        if (isDisabled) {
            setErrorPhone(t('phoneError'));
        } else {
            setErrorPhone('');
        };
    }, [isDisabled]);

    const onSetPhone = (value: string) => {
        const newValue = value.replace(/[^0-9]/g, '');
        setPhone(newValue);
    };

    const onContinue = async () => {
        const value = '+380' + phone;
        if (!isContinue) {
            const { message } = await authorizationUseCase(value, password);
            setErrorPhone('');
            setErrorPassword('');
        } else {
            onBlur();
            onBlurPassword();
        };
    };

    const onRegistration = () => navigation.navigate('RegistrationView');
    const onForgottenPassword = () => navigation.navigate('ForgottenPasswordView');

    return { isValid, errorPhone, phone, password, phonePrefix, errorPassword, isValidPassword, onBlurPassword, onContinue, setPassword, onBlur, onSetPhone, onRegistration, onForgottenPassword };
};