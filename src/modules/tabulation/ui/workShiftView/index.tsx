import React, { FC, useCallback, useMemo } from "react";
import { useUiContext } from "../../../../UIProvider";
import { ScreenContainer } from "../../../../UIKit/screenContainer";
import { getStyle } from "./style";
import { DashboardHeader } from "../../../dashboard/ui/components/dashboardHeader";
import { FlatList } from "react-native";
import { companyModel } from "../../../shared/entities/company/CompanyModel";
import { WorkShiftItem } from "../components/workShiftItem";
import { WorkShiftEmptyList } from "../components/workShiftEmptyList";
import { workShiftModel } from "../../../shared/entities/workShift/WorkShiftModel";
import { UseListWorkShift } from "../../presenters/useListWorkShift";
import { observer } from "mobx-react";
import { ButtonAddItem } from "../../../bypassSheetCreate/ui/components/buttonAddItem";

export const WorkShiftView: FC = observer(() => {
    const { colors, t } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);
    const { deleteWorkShift, onEditWorkShift ,onCreateWorkShift} = UseListWorkShift();

    const renderItem = useCallback(({ item }: any) => <WorkShiftItem workShift={item} deleteWorkShift={deleteWorkShift} onEditWorkShift={onEditWorkShift}/>, []);
    const keyExtractor = useCallback((item: { id: string; }) => item.id, []);

    return (
        <ScreenContainer edges={['bottom']} containerStyle={styles.container} headerComponent={<DashboardHeader title={t('workShift')} isBackAvailable={true} />}>
            <FlatList
                ListEmptyComponent={<WorkShiftEmptyList />}
                showsVerticalScrollIndicator={false}
                data={workShiftModel.workShift}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
                style={styles.container}
            />
            <ButtonAddItem onPress={onCreateWorkShift}/>
        </ScreenContainer>
    );
});