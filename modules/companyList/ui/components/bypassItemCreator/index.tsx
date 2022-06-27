import React, { FC, memo, useMemo } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { AddIcon } from '../../../../../assets/icons/AddIcon';
import { useUiContext } from '../../../../../src/UIProvider';
import { getStyle } from './styles';

interface IProps {
    title: string;
    buttonText: string;
    onPress: () => void;
}

export const BypassItemCreator: FC<IProps> = memo(({ onPress, title, buttonText }) => {
    const { colors } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);

    return <View style={styles.container} >
        <View style={styles.sideWrapper}>
            <Text style={styles.title}>{title}</Text>
        </View>
        <TouchableOpacity style={styles.sideWrapperRight} onPress={onPress}>
            <AddIcon />
            <Text style={styles.buttonText}>{buttonText}</Text>
        </TouchableOpacity>
    </View>
})
