import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useUiContext } from "../../../UIProvider";
import { registrationUseCase } from "../useCase/registrationUseCase";
import { userModel } from "../../shared/entities/user/userModel";
import { useShowToast } from "../../shared/hooks/useShowToast";

const phoneNumberRegex = /^\+380\d{9}$/;

export const useRegistration = () => {
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [isValid, setIsValid] = useState(true);
    const [isValidPassword, setIsValidPassword] = useState(true);
    const [errorPhone, setErrorPhone] = useState('');
    const [errorPassword, setErrorPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [isValidFirstName, setIsValidFirstName] = useState(true);
    const [errorFirstName, setErrorFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [isValidLastName, setIsValidLastName] = useState(true);
    const [errorLastName, setErrorLastName] = useState('');
    const { t } = useUiContext();
    const isDisabled = useMemo(() => !phoneNumberRegex.test(phone), [phone]);
    const phonePrefix = useMemo(() => phone ? '' : "+380", [phone]);
    const isPassword = useMemo(() => password.length === 0, [password]);
    const isFirstName = useMemo(() => firstName.length === 0, [firstName]);
    const isLastName = useMemo(() => lastName.length === 0, [lastName]);
    const navigation = useNavigation<StackNavigationProp<any>>();
    const { showSuccess, showError } = useShowToast();

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
        if (!isFirstName) {
            setErrorFirstName('');
            setIsValidFirstName(true);
        };
    }, [isFirstName]);

    useEffect(() => {
        if (!isLastName) {
            setErrorLastName('');
            setIsValidLastName(true);
        };
    }, [isLastName]);

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

    const onBlurFirstName = useCallback(() => {
        setIsValidFirstName(!isFirstName);
        if (isFirstName) {
            setErrorFirstName(t('passwordError'));
        } else {
            setErrorFirstName('');
        };
    }, [isFirstName]);

    const onBlurLastName = useCallback(() => {
        setIsValidLastName(!isLastName);
        if (isLastName) {
            setErrorLastName(t('passwordError'));
        } else {
            setErrorLastName('');
        };
    }, [isLastName]);

    const onSetPhone = (value: string) => {
        const newValue = value.replace(/[^+0-9]/g, '');
        setPhone(newValue);
    };

    const onFirstName = (value: string) => {
        if (!/\d/.test(value)) setFirstName(value);
    };

    const onLastName = (value: string) => {
        if (!/\d/.test(value)) setLastName(value);
    };

    const onFocus = () => {
        if (phone === "") {
            setPhone(phonePrefix);
        };
    };

    const onCreateAccount = async () => {
        if (!firstName || !lastName || isDisabled || !password) {
            onBlur();
            onBlurPassword();
            onBlurFirstName();
            onBlurLastName();
        } else {
            const { message } = await registrationUseCase(firstName, lastName, phone, password);
            if (!message) {
                navigation.navigate('CompanyListView');
                showSuccess(t('successfulRegistration'));
            } else {
                showError('errorToast',t('suchUserAlreadyExists'))
            };
            setErrorPhone('');
            setErrorPassword('');
        };
    };

    return { firstName, lastName, phonePrefix, isValidLastName, errorLastName, isValid, errorFirstName, errorPhone, phone, isValidFirstName, password, errorPassword, isValidPassword, onFocus, onFirstName, onBlurLastName, onBlurPassword, onLastName, onBlurFirstName, onCreateAccount, setPassword, onBlur, onSetPhone };
};