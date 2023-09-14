import { useCallback, useEffect, useMemo, useState } from "react";
import { useUiContext } from "../../../UIProvider";
import { useShowToast } from "../../shared/hooks/useShowToast";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useCreateCompanyUseCase } from "../useCase/useCreateCompanyUseCase";
import { useCompanyListUseCase } from "../useCase/useCompanyListUseCase";
import { userModel } from "../../shared/entities/user/userModel";

export const useCompanyView = () => {
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
        setCompanyName(value);
    };

    const onCreate = async () => {
        if (!isCompanyName) {
            const { message } = await useCreateCompanyUseCase(companyName);
            await useCompanyListUseCase(Number(userModel.user?.id));
            navigation.navigate('CompanyListView');
        } else {
            onBlur();
        };
    };

    return { isValid, companyName, errorName, onSetName, onBlur, onCreate, };
};