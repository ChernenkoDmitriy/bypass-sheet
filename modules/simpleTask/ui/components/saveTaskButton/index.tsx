import React, { FC, useMemo } from 'react';
import { Pressable } from 'react-native';
import { DoneIcon } from '../../../../../assets/icons/DoneIcon';
import { useUiContext } from '../../../../../src/UIProvider';
import { getStyle } from './styles';

interface IProps {
    onSave: () => void;
}

export const SaveTaskButton: FC<IProps> = ({ onSave }) => {
    const { colors } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);

    return <Pressable style={({ pressed }) => [styles.container, { opacity: pressed ? 0.5 : 1 }]} onPress={onSave}>
        <DoneIcon />
    </Pressable>
};
