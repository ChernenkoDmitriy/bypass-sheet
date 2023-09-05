import { useNavigation } from "@react-navigation/native"
import { useCallback, useEffect, useMemo, useState } from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { useUiContext } from "../../../UIProvider";
import { useShowToast } from "../../shared/hooks/useShowToast";
import { companyModel } from "../../shared/entities/company/CompanyModel";
import { useCreateWorkShiftUseCase } from "../useCase/useCreateWorkShiftUseCase";

export const useCreateWorkShift = () => {
    const [companyName, setCompanyName] = useState('');
    const [isValid, setIsValid] = useState(true);
    const [isTimePickerVisibleStart, setTimePickerVisibilityStart] = useState(false);
    const [selectedTimeStart, setSelectedTimeStart] = useState('');
    const [isTimePickerVisibleEnd, setTimePickerVisibilityEnd] = useState(false);
    const [selectedTimeEnd, setSelectedTimeEnd] = useState('');
    const [errorName, setErrorName] = useState('');
    const isCompanyName = useMemo(() => companyName.length <= 2, [companyName]);
    const { t } = useUiContext();
    const { showSuccess } = useShowToast();
    const navigation = useNavigation<StackNavigationProp<any>>();
    const selectTime = useMemo(()=>!!selectedTimeStart  && !!selectedTimeEnd ,[selectedTimeStart,selectedTimeEnd ]);    

    useEffect(() => {
        if (isCompanyName) {
            setErrorName('');
            setIsValid(true);
        };
    }, [isCompanyName]);

    const showTimePickerStart = () => {
        setTimePickerVisibilityStart(true);
    };

    const hideTimePickerStart = () => {
        setTimePickerVisibilityStart(false);
    };

    const showTimePicker = () => {
        setTimePickerVisibilityEnd(true);
    };

    const hideTimePicker = () => {
        setTimePickerVisibilityEnd(false);
    };

    const handleConfirmStart = (date: any) => {
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const formattedTime = `${hours}:${minutes.toString().padStart(2, '0')}`;
        setSelectedTimeStart(formattedTime);
        hideTimePickerStart();
    };

    const handleConfirm = (date: any) => {
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const formattedTime = `${hours}:${minutes.toString().padStart(2, '0')}`;
        setSelectedTimeEnd(formattedTime);
        hideTimePicker();
    };

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

    const onCreate = async () => {
        if (!isCompanyName && selectTime) {
            await useCreateWorkShiftUseCase(companyModel.chosenCompany?.id || 0 , selectedTimeStart , selectedTimeEnd , companyName);
            navigation.goBack();
        } else {
            onBlur();
        };
    };

    return { isTimePickerVisibleEnd, selectedTimeEnd, isValid, companyName, errorName, isTimePickerVisibleStart, selectedTimeStart,selectTime, showTimePicker, hideTimePicker, handleConfirm, hideTimePickerStart, showTimePickerStart, setTimePickerVisibilityStart, setSelectedTimeStart, handleConfirmStart, onSetName, onBlur, onCreate, };
};