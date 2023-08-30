import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useUiContext } from "../../../UIProvider";

const phoneNumberRegex = /^\+380\d{6,11}$/;

export const useRegistration = () => {
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [fullName, setFullName] = useState('');
    const [isValidFullName, setIsValidFullName] = useState(true);
    const [errorFullName, setErrorFullName] = useState('');
    const [isValid, setIsValid] = useState(true);
    const [isValidPassword, setIsValidPassword] = useState(true);
    const [errorPhone, setErrorPhone] = useState('');
    const [errorPassword, setErrorPassword] = useState('');
    const { t } = useUiContext();
    const isDisabled = useMemo(() => !phoneNumberRegex.test('+380' + phone), [phone]);
    const isContinue = useMemo(() => isDisabled || !password.length, [phone, password]);
    const phonePrefix = useMemo(() => !phone ? '' : "+380", [phone]);
    const isPassword = useMemo(() => password.length === 0, [password]);
    const isFullName = useMemo(() => fullName.length === 0, [fullName]);
    const navigation = useNavigation<StackNavigationProp<any>>();

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

    useEffect(() => {
        if (!isFullName) {
            setErrorFullName('');
            setIsValidFullName(true);
        };
    }, [isFullName]);

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

    const onBlurFullName = useCallback(() => {
        setIsValidFullName(!isFullName);
        if (isFullName) {
            setErrorFullName(t('fullNameError'));
        } else {
            setErrorFullName('');
        };
    }, [isFullName]);

    const onSetPhone = (value: string) => {
        const newValue = value.replace(/[^0-9]/g, '');
        setPhone(newValue);
    };

    const onFullName = (value: string) => {
        if (!/\d/.test(value)) setFullName(value);
    };

    const onCreateAccount = () => {
        if (!isContinue) {
            setErrorPhone('');
            setErrorPassword('');
        } else {
            onBlur();
            onBlurPassword();
            onBlurFullName();
        };
    };

    return { phonePrefix, isValid, errorPhone, phone, password, errorPassword, isValidPassword, fullName, isValidFullName, errorFullName, onBlurFullName, onFullName, onBlurPassword, onCreateAccount, setPassword, onBlur, onSetPhone };
};