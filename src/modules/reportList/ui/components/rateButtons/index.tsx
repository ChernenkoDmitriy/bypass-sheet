import React, { FC, useMemo } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { useUiContext } from '../../../../../UIProvider';
import { getStyle } from './styles';

interface Props {
    id: number;
    rate: number;
    onChangeRate: (rate: number, id: number) => void;
}

export const RateButtons: FC<Props> = ({ rate, id, onChangeRate }) => {
    const { colors } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);

    return (
        <View style={styles.container}>
            {[0, 50, 100, 150, 200, 250].map((item) => (
                <TouchableOpacity
                    style={[styles.button, { backgroundColor: rate === item ? colors.accentColorLight : undefined }]}
                    key={`${item}`}
                    onPress={() => onChangeRate(item, id)}
                >
                    <Text style={[styles.title, { color: rate === item ? colors.card : colors.titleText }]}>{item}</Text>
                </TouchableOpacity>
            ))}
        </View>
    )
}
