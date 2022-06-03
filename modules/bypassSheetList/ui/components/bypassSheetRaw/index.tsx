import React, { FC, useCallback, useMemo } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { useUiContext } from '../../../../../src/UIProvider';
import { IBypassSheet } from '../../../../shared/entities/bypassList/IBypassSheet';
import { getStyle } from './styles';

interface IProps {
    item: IBypassSheet;
    onPress: (item: IBypassSheet) => void;
}

export const BypassSheetRaw: FC<IProps> = ({ item, onPress }) => {
    const { colors } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);

    const onHandlePress = useCallback(() => {
        onPress(item);
    }, []);

    return (<TouchableOpacity style={styles.container} onPress={onHandlePress}>
        <Text style={styles.title} numberOfLines={2}>{item.title}</Text>
    </TouchableOpacity>

    )
}
