import { useCallback, useEffect, useMemo, useState } from "react";
import { useUiContext } from "../../../UIProvider";
import { useShowToast } from "../../shared/hooks/useShowToast";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

export const UseCompanyView = () => {
    const [companyName, setCompanyName] = useState('');
    const [isValid, setIsValid] = useState(true);
    const [errorName, setErrorName] = useState('');
    const isCompanyName = useMemo(() => companyName.length <= 2, [companyName]);
    const { t } = useUiContext();
    const { showSuccess } = useShowToast();
    const navigation = useNavigation<StackNavigationProp<any>>();

    useEffect(() => {
        if (isCompanyName) {
            setErrorName('');
            setIsValid(true);
        };
    }, [isCompanyName]);

    const onBlur = useCallback(() => {
        setIsValid(!isCompanyName);
        if (isCompanyName) {
            setErrorName(t('passwordError'));
        } else {
            setErrorName('');
        };
    }, [isCompanyName]);

    const onSetName = (value: string) => {
        if (!/\d/.test(value)) setCompanyName(value);
    };

    const onCreate = () => {
        if (!isCompanyName) {
            showSuccess('successCreateCompany');
            navigation.navigate('CompanyListView');
        } else {
            onBlur();
        };
    };

    return { isValid, companyName, errorName, onSetName, onBlur, onCreate, };
};