import React, { FC, useCallback, useMemo } from 'react';
import { FlatList, View, Text } from 'react-native';
import { useUiContext } from '../../../../../src/UIProvider';
import { IBypassCompany } from '../../../../shared/entities/bypassList/IBypassCompany';
import { IBypassSheet } from '../../../../shared/entities/bypassList/IBypassSheet';
import { EditableBypassSheetRaw } from '../editableBypassSheetRaw';
import { getStyle } from './styles';

interface IProps {
    company: IBypassCompany | null;
}

export const EditableBypassSheet: FC<IProps> = ({ company }) => {
    const { colors, t } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);

    const renderItem = useCallback(({ item }: any) => item ? <EditableBypassSheetRaw  {...{ item }} /> : null, []);

    const keyExtractor = useCallback((item: IBypassSheet) => `${item?.id}`, []);

    return (company?.items?.length
        ? <View style={styles.container}>
            <Text style={styles.title}>{t('bypassList')}</Text>
            <FlatList
                keyExtractor={keyExtractor}
                renderItem={renderItem}
                data={company?.items}
                contentContainerStyle={styles.contentContainerStyle}
            />
        </View>
        : null)
};
