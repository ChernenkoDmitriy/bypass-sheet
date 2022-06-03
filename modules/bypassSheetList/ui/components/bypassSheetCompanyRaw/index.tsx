import React, { FC, useMemo } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { useUiContext } from '../../../../../src/UIProvider';
import { IBypassCompany } from '../../../../shared/entities/bypassList/IBypassCompany';
import { IBypassSheet } from '../../../../shared/entities/bypassList/IBypassSheet';
import { AddBypassSheetRaw } from '../addBypassSheetRaw';
import { BypassSheetRaw } from '../bypassSheetRaw';
import { getStyle } from './styles';

interface IProps {
    item: IBypassCompany;
    onPress: (item: IBypassSheet) => void;
}

export const BypassSheetCompanyRaw: FC<IProps> = ({ item, onPress }) => {
    const { colors, t } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);

    return (
        <View style={styles.container}>
            <Text style={styles.title} numberOfLines={2}>{item.title}</Text>
            {item.items?.map((bypassSheet) => <BypassSheetRaw key={`${bypassSheet.id}`} item={bypassSheet} onPress={onPress} />)}
            <AddBypassSheetRaw companyId={item.id} />
        </View>
    )
}
