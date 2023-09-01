import React, { FC, useCallback, useMemo } from "react";
import { useUiContext } from "../../../../UIProvider";
import { ScreenContainer } from "../../../../UIKit/screenContainer";
import { getStyle } from "./style";
import { DashboardHeader } from "../../../dashboard/ui/components/dashboardHeader";
import { FlatList, Text } from 'react-native';
import { AddCompanyButton } from "../components/addCompanyButton";
import { CompanyItem } from "../components/companyItem";
import { useCompanyList } from "../../presenters/useCompanyList";

export const CompanyListView: FC = () => {
    const { colors, t } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);
    const { onConnectToCompany, onCreateCompany } = useCompanyList();

    const renderItem = useCallback(({ item }: any) => <CompanyItem />, []);

    const keyExtractor = useCallback((item: any) => item.id, []);

    return (
        <ScreenContainer edges={['bottom']} containerStyle={styles.container} headerComponent={<DashboardHeader isBackAvailable={false} settings/>}>
            <Text>Company List</Text>
            <FlatList
                data={[]}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
                style={styles.container}
            />
            <AddCompanyButton onConnectToCompany={onConnectToCompany} onCreateCompany={onCreateCompany} />
        </ScreenContainer>
    );
};