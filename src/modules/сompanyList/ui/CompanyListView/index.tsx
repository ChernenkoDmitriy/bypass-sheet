import React, { FC, useCallback, useMemo } from "react";
import { useUiContext } from "../../../../UIProvider";
import { ScreenContainer } from "../../../../UIKit/screenContainer";
import { getStyle } from "./style";
import { DashboardHeader } from "../../../dashboard/ui/components/dashboardHeader";
import { FlatList, Text } from 'react-native';
import { AddCompanyButton } from "../components/addCompanyButton";
import { CompanyItem } from "../components/companyItem";
import { useCompanyList } from "../../presenters/useCompanyList";
import { observer } from "mobx-react";
import { companyModel } from "../../../shared/entities/company/CompanyModel";
import Geolocation from '@react-native-community/geolocation';

export const CompanyListView: FC = observer(() => {
    const { colors, t } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);
    const { containerListRefresh, onRefresh, onConnectToCompany, onCreateCompany, deleteCompany, onEditCompany, onPressEvent, getCompanyList, acceptInvite } = useCompanyList();

    const renderItem = useCallback(({ item }: any) => <CompanyItem acceptInvite={acceptInvite} onPress={onPressEvent} companyItem={item} deleteCompany={deleteCompany} onEditCompany={onEditCompany} />, []);
    const keyExtractor = useCallback((item: { id: string; }) => item.id, []);

    return (
        <ScreenContainer edges={['bottom']} containerStyle={styles.container} headerComponent={<DashboardHeader isBackAvailable={false} settings />}>
            <FlatList
                refreshing={containerListRefresh}
                onRefresh={onRefresh}
                showsVerticalScrollIndicator={false}
                data={companyModel.companyList}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
                style={styles.container}
            />
            <AddCompanyButton onConnectToCompany={onConnectToCompany} onCreateCompany={onCreateCompany} />
        </ScreenContainer>
    );
});