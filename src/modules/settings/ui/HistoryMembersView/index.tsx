import { observer } from 'mobx-react';
import React, { FC, useCallback, useMemo } from 'react';
import { useUiContext } from '../../../../UIProvider';
import { ScreenContainer } from '../../../../UIKit/screenContainer';
import { DashboardHeader } from '../../../dashboard/ui/components/dashboardHeader';
import { getStyle } from './styles';
import { FlatList, Text, View } from 'react-native';
import { TimeSheetUserItem } from '../components/timeSheetUserItem';
import { useTimeSheetUserListUseCase } from '../../useCase/useTimeSheetUserListUseCase';
import { useFocusEffect } from '@react-navigation/native';
import { companyModel } from '../../../../entities/company/CompanyModel';
import { timeSheetModel } from '../../../../entities/timeSheet/TimeSheetModel';

export const HistoryMembersView: FC = observer(() => {
    const { t, colors } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);

    useFocusEffect(
        useCallback(() => {
            useTimeSheetUserListUseCase(companyModel.chosenCompany?.id || 0, 1613980001709, 16939800017090);
        }, [])
    );

    const renderItem = useCallback(({ item }: any) => <TimeSheetUserItem timeSheetItem={item} />, []);
    const keyExtractor = useCallback((item: { id: string; }) => item.id, []);

    return (
        <ScreenContainer scrollEnabled containerStyle={styles.container} edges={['bottom']} headerComponent={<DashboardHeader isBackAvailable={true} title={t('history')} />}>
            <Text style={styles.title}>{t('history')}</Text>
            <View style={styles.flatListTitle}>
                <Text style={styles.text}>{'День' + '            '}</Text>
                <Text style={styles.text}>Початок</Text>
                <Text style={styles.text}>Кінець</Text>
            </View>
            <FlatList
               scrollEnabled={false}
                showsVerticalScrollIndicator={false}
                data={timeSheetModel.timeSheetListUser}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
                style={styles.container}
            />
        </ScreenContainer>
    );
});