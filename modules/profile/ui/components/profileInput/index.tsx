import React, { FC, useMemo, memo } from 'react';
import { View, Text, TextInput } from 'react-native';
import { useUiContext } from '../../../../../src/UIProvider';
import { getStyle } from './styles';

interface IProps {
    title: string;
    value: string;
    onChangeText: (text: string) => void;
}

export const ProfileInput: FC<IProps> = memo(({ onChangeText, title, value }) => {
    const { colors } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <TextInput
                style={styles.input}
                value={value}
                onChangeText={onChangeText}
            />
        </View>
    );
});
