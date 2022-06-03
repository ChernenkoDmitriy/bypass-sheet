import React, { FC, useCallback, useMemo } from 'react';
import { FlatList } from 'react-native';
import { useUiContext } from '../../../../../src/UIProvider';
import { IBypassCompany } from '../../../../shared/entities/bypassList/IBypassCompany';
import { IBypassSheet } from '../../../../shared/entities/bypassList/IBypassSheet';
import { BypassSheetCompanyRaw } from '../bypassSheetCompanyRaw';
import { EmptyBypassSheetsList } from '../emptyBypassSheetsList';
import { getStyle } from './styles';

interface IProps {
    bypassList: IBypassCompany[];
    onChoseRoom: (item: IBypassSheet) => void;
}

export const BypassSheetsList: FC<IProps> = ({ bypassList, onChoseRoom }) => {
    const { colors } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);

    const renderItem = useCallback(({ item }: any) => item ? <BypassSheetCompanyRaw item={item} onPress={onChoseRoom} /> : null, []);

    const keyExtractor = useCallback((item: IBypassCompany) => `${item?.id}`, []);

    return (<FlatList
        ListEmptyComponent={<EmptyBypassSheetsList />}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        data={bypassList}
        contentContainerStyle={styles.contentContainerStyle}
    />)
};
