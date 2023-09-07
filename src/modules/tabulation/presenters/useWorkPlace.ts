import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useUiContext } from "../../../UIProvider";
import { workPlaceModel } from "../../shared/entities/workPlace/WorkPlaceModel";
import { useCreateWorkPlaceUseCase } from "../useCase/useCreateWorkPlaceUseCase";
import { companyModel } from "../../shared/entities/company/CompanyModel";

export const UseWorkPlace = () => {
    const [radius, setRadius] = useState('');
    const [isValid, setIsValid] = useState(true);
    const [errorRadius, setErrorRadius] = useState('');
    const [name, setName] = useState('');
    const [isValidName, setIsValidName] = useState(true);
    const [errorName, setErrorName] = useState('');
    const [address, setAddress] = useState('');
    const [isValidAddress, setIsValidAddress] = useState(true);
    const [errorAddress, setErrorAddress] = useState('');
    const isRadius = useMemo(() => radius.length === 0, [radius]);
    const isName = useMemo(() => name.length === 0, [name]);
    const isAddress = useMemo(() => address.length === 0, [address]);
    const { t } = useUiContext();
    const navigation = useNavigation<StackNavigationProp<any>>();

    useEffect(() => {
        if (!isRadius) {
            setErrorRadius('');
            setIsValid(true);
        };
    }, [isRadius]);

    useEffect(() => {
        if (!isName) {
            setErrorName('');
            setIsValidName(true);
        };
    }, [isName]);

    useEffect(() => {
        if (!isAddress) {
            setErrorAddress('');
            setIsValidAddress(true);
        };
    }, [isAddress]);

    useEffect(() => {
        return () => {
            workPlaceModel.latitude = 0;
            workPlaceModel.longitude = 0;
        };
    }, []);

    const onBlur = useCallback(() => {
        setIsValid(!isRadius);
        if (isRadius) {
            setErrorRadius(t('passwordError'));
        } else {
            setErrorRadius('');
        };
    }, [isRadius]);

    const onBlurName = useCallback(() => {
        setIsValidName(!isName);
        if (isName) {
            setErrorName(t('passwordError'));
        } else {
            setErrorName('');
        };
    }, [isName]);

    const onBlurAddress = useCallback(() => {
        setIsValidAddress(!isAddress);
        if (isAddress) {
            setErrorAddress(t('passwordError'));
        } else {
            setErrorAddress('');
        };
    }, [isAddress]);

    const onSetRadius = (value: string) => {
        const newValue = value.replace(/[^0-9]/g, '');
        setRadius(newValue);
    };

    const onName = (value: string) => {
        if (!/\d/.test(value)) setName(value);
    };

    const onAddress = (value: string) => {
        if (!/\d/.test(value)) setAddress(value);
    };

    const openMap = () => navigation.navigate('SearchAddressMapView');

    const onContinue = async () => {
        if (!name || !address || !radius || workPlaceModel.latitude === 0) {
            onBlur();
            onBlurName();
            onBlurAddress();
        } else {
            await useCreateWorkPlaceUseCase(companyModel.chosenCompany?.id || 0, workPlaceModel.longitude, workPlaceModel.latitude, Number(radius), name, address)
            navigation.goBack();
            setErrorName('');
            setErrorAddress('');
            setErrorRadius('');
        };
    };

    return { name, isValidName, errorName, address, isValidAddress, errorAddress, radius, isValid, errorRadius, onAddress, onBlurAddress, onBlurName, onName, openMap, onBlur, onSetRadius, onContinue, }
};