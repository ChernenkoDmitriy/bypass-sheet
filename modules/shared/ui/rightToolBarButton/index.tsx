import React, { FC, useMemo } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { useUiContext } from '../../../../src/UIProvider';
import { getStyle } from './styles';

interface IProps {
    title: string;
    onPress: () => void;
    disabled: boolean;
}

export const RightToolBarButton: FC<IProps> = ({ title, disabled, onPress }) => {
    const { colors } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);

    return (
        <TouchableOpacity style={[styles.container, { opacity: disabled ? 0.4 : 1 }]} onPress={onPress} disabled={disabled}>
            <Text style={styles.title} numberOfLines={1}>{title}</Text>
        </TouchableOpacity>
    )
}
