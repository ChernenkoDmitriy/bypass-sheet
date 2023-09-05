import React, { FC, useCallback, useMemo } from "react";
import { useUiContext } from "../../../../UIProvider";
import { ScreenContainer } from "../../../../UIKit/screenContainer";
import { getStyle } from "./style";
import { DashboardHeader } from "../../../dashboard/ui/components/dashboardHeader";
import { Text } from 'react-native'
import { AdminButton } from "../components/adminButtonItem";
import { useTabulation } from "../../presenters/useTabulation";
import { observer } from "mobx-react";

export const TabulationView: FC = observer(() => {
    const { colors, t } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);
    const { onWorkShift, onAddUser } = useTabulation();

    return (
        <ScreenContainer edges={['bottom']} containerStyle={styles.container} headerComponent={<DashboardHeader isBackAvailable={false} />}>
            <AdminButton title={t('workShift')} onPress={onWorkShift} />
            <AdminButton title={t('users')} onPress={onAddUser} />
        </ScreenContainer>
    );
});