import React, { FC, useCallback, useMemo } from "react";
import { useUiContext } from "../../../../UIProvider";
import { ScreenContainer } from "../../../../UIKit/screenContainer";
import { getStyle } from "./style";
import { DashboardHeader } from "../../../dashboard/ui/components/dashboardHeader";
import { FlatList } from "react-native";
import { observer } from "mobx-react";
import { ButtonAddItem } from "../../../bypassSheetCreate/ui/components/buttonAddItem";
import { UseWorkPlaceList } from "../../presenters/useWorkPlaceList";
import { workPlaceModel } from "../../../shared/entities/workPlace/WorkPlaceModel";
import { WorkPlaceItem } from "../components/workPlaceItem";
import { WorkPlaceEmptyList } from "../components/workPlaceEmptyList";

export const WorkPlaceListView: FC = observer(() => {
    const { colors, t } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);
    const { containerListRefresh, onRefresh, onCreateWorkPlace, onDeleteWorkPLace, onUpdateWorkPlace } = UseWorkPlaceList();

    const renderItem = useCallback(({ item }: any) => <WorkPlaceItem onDeleteWorkPLace={onDeleteWorkPLace} workPlace={item} />, []);
    const keyExtractor = useCallback((item: { id: string; }) => item.id, []);

    return (
        <ScreenContainer edges={['bottom']} containerStyle={styles.container} headerComponent={<DashboardHeader title={t('listAddress')} isBackAvailable={true} />}>
            {workPlaceModel.workPlaceList.length
                ? <ButtonAddItem onPress={onCreateWorkPlace} />
                : null
            }
            <FlatList
                refreshing={containerListRefresh}
                onRefresh={onRefresh}
                ListEmptyComponent={<WorkPlaceEmptyList />}
                showsVerticalScrollIndicator={false}
                data={workPlaceModel.workPlaceList}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
                style={styles.container}
            />
        </ScreenContainer>
    );
});