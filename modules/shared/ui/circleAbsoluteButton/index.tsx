import React, { FC, useMemo } from 'react';
import { Pressable, Text } from 'react-native';
import { PlusIcon } from '../../../../assets/icons/PlusIcon';
import { useUiContext } from '../../../../src/UIProvider';
import { getStyle } from './styles';

interface Props {
    onPress: () => void;
    sign?: string;
}

export const CircleAbsoluteButton: FC<Props> = ({ onPress, sign = '+' }) => {
    const { colors } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);

    return (
        <Pressable onPress={onPress} style={({ pressed }) => [{ opacity: pressed ? 0.7 : 1 }, styles.container]}>
            <PlusIcon color={colors.card} />
        </Pressable>
    )
}
