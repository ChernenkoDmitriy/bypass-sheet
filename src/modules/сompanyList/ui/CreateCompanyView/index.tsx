import React, { FC, useCallback, useMemo } from "react";
import { useUiContext } from "../../../../UIProvider";
import { ScreenContainer } from "../../../../UIKit/screenContainer";
import { getStyle } from "./style";
import { DashboardHeader } from "../../../dashboard/ui/components/dashboardHeader";
import { Text } from 'react-native'
import { MainInput } from "../../../../UIKit/mainInput";
import { useCompanyView } from "../../presenters/useCompanyView";

export const CreateCompanyView: FC = () => {
    const { colors, t } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);
    const { isValid, companyName, errorName, onSetName, onBlur, onCreate, } = useCompanyView();

    return (
        <ScreenContainer edges={['bottom']} containerStyle={styles.container} headerComponent={<DashboardHeader title={t('newCompany')} logo={false} onCreate={onCreate} isBackAvailable create />}>
            <MainInput
                containerStyle={{ marginTop: 20 }}
                inputWrapperStyle={{ borderBottomColor: isValid ? colors.primary : 'red' }}
                title={t('companyName')}
                value={companyName}
                maxLength={50}
                onChangeText={onSetName}
                keyboardType={'default'}
                isValid={isValid}
                onBlur={onBlur}
                errorText={errorName}
            />
        </ScreenContainer>
    );
};