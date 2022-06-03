import React, { FC, useMemo, memo } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useUiContext } from '../../../../../src/UIProvider';
import { getStyle } from './styles';

interface IProps {
    isChosen: boolean;
    text: string;
    onPress: () => void;
}

export const ColorThemeItem: FC<IProps> = memo(({ onPress, text, isChosen }) => {
    const { colors } = useUiContext();
    const styles = useMemo(() => getStyle(colors, isChosen), [colors, isChosen]);

    return (
        <TouchableOpacity onPress={onPress} >
            <View style={styles.container}>
                <View style={styles.contentBorder}>
                    <View style={styles.contentContainer}></View>
                </View>
                <Text numberOfLines={1} style={styles.title}>{text}</Text>
            </View>
        </TouchableOpacity>
    );
});
