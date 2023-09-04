import React, { FC, useCallback, useEffect, useMemo } from "react";
import { useUiContext } from "../../../../UIProvider";
import { ScreenContainer } from "../../../../UIKit/screenContainer";
import { getStyle } from "./style";
import { DashboardHeader } from "../../../dashboard/ui/components/dashboardHeader";
import { FlatList, Text } from 'react-native';
import { AddCompanyButton } from "../components/addCompanyButton";
import { CompanyItem } from "../components/companyItem";
import { useCompanyList } from "../../presenters/useCompanyList";
import { userModel } from "../../../shared/entities/user/userModel";
import { observer } from "mobx-react";
import { useCompanyListUseCase } from "../../useCase/useCompanyListUseCase";
import { companyModel } from "../../../shared/entities/company/CompanyModel";
import { ICompany } from "../../../shared/entities/company/ICompany";
import { useFocusEffect } from '@react-navigation/native';
import { getLocation } from "../../useCase/getLocation";

export const CompanyListView: FC = observer(() => {
    const { colors, t } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);
    const { onConnectToCompany, onCreateCompany , deleteCompany , onEditCompany } = useCompanyList();

    const renderItem = useCallback(({ item }: any) => <CompanyItem item={item} deleteCompany={deleteCompany} onEditCompany={onEditCompany}/> , []);
    const keyExtractor = useCallback((item: ICompany) => item.id, []);
    getLocation();
    
    return (
        <ScreenContainer edges={['bottom']} containerStyle={styles.container} headerComponent={<DashboardHeader isBackAvailable={false} settings />}>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={companyModel.companyList}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
                style={styles.container}
            />
            <AddCompanyButton onConnectToCompany={onConnectToCompany} onCreateCompany={onCreateCompany}/>
        </ScreenContainer>
    );
});