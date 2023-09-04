import { useCallback, useEffect, useMemo, useState } from "react";
import { useUpdateCompanyUseCase } from "../useCase/useUpdateCompanyUseCase";
import { useUiContext } from "../../../UIProvider";
import { useNavigation, useRoute } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

export const useEditCompany = () => {
    const route = useRoute();
    const { id, companyName } = route?.params;
    const [name, setName] = useState(companyName);
    const [isValid, setIsValid] = useState(true);
    const [errorName, setErrorName] = useState('');
    const { t } = useUiContext();
    const isCompanyName = useMemo(() => name.length <= 2, [name]);
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
        if (!/\d/.test(value)) setName(value);
    };

    const getSelectedCompany = async (id: number, name: string, description: 'Description') => {
        if (!isCompanyName) {
            const { message } = await useUpdateCompanyUseCase(id, name, description);
            navigation.navigate('CompanyListView');
        } else {
            onBlur();
        };
    };
    return { isValid, name, errorName, id, companyName, onSetName, onBlur, getSelectedCompany, };
};