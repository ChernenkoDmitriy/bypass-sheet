import React, { FC, useCallback, useMemo } from "react";
import { useUiContext } from "../../../../UIProvider";
import { ScreenContainer } from "../../../../UIKit/screenContainer";
import { getStyle } from "./style";
import { DashboardHeader } from "../../../dashboard/ui/components/dashboardHeader";
import { useEditCompany } from "../../presenters/useEditCompany";
import { MainButton } from "../../../shared/ui/mainButton";
import { MainInput } from "../../../../UIKit/mainInput";

export const EditCompanyView: FC = () => {
    const { colors, t } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);
    const { isValid, name, errorName, id, companyName, onSetName, onBlur, getSelectedCompany, } = useEditCompany();

    return (
        <ScreenContainer edges={['bottom']} containerStyle={styles.container} headerComponent={<DashboardHeader title={t('edit') + ': ' + companyName} logo={false} isBackAvailable />}>
            <MainInput
                containerStyle={{ marginVertical: 20 }}
                inputWrapperStyle={{ borderBottomColor: isValid ? colors.primary : 'red' }}
                title={t('companyName')}
                value={name}
                maxLength={50}
                onChangeText={onSetName}
                keyboardType={'default'}
                isValid={isValid}
                onBlur={onBlur}
                errorText={errorName}
            />
            <MainButton title={t('refresh')} onPress={() => getSelectedCompany(id, name, 'Description')} />
        </ScreenContainer>
    );
};