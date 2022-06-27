import React, { FC, useCallback, useMemo } from 'react';
import { FlatList } from 'react-native';
import { useUiContext } from '../../../../../src/UIProvider';
import { IBypassSheet } from '../../../../shared/entities/bypassList/IBypassSheet';
import { BypassSheetRaw } from '../bypassSheetRaw';
import { EmptyBypassSheetsList } from '../emptyBypassSheetsList';
import { getStyle } from './styles';

interface IProps {
    bypassList: IBypassSheet[];
    onChoseRoom: (item: IBypassSheet) => void;
    onEditItem: (item: IBypassSheet) => void;
}

export const BypassSheetsList: FC<IProps> = ({ bypassList, onChoseRoom, onEditItem }) => {
    const { colors } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);

    const renderItem = useCallback(({ item }: any) => item ? <BypassSheetRaw item={item} onPress={onChoseRoom} onEditItem={onEditItem} /> : null, []);

    const keyExtractor = useCallback((item: IBypassSheet) => `${item?.id}`, []);

    return (<FlatList
        ListEmptyComponent={<EmptyBypassSheetsList />}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        data={bypassList}
        contentContainerStyle={styles.contentContainerStyle}
    />)
};
