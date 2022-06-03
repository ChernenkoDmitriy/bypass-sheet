
import React, { FC, useMemo } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { RateStarIcon } from '../../../../../assets/icons/RateStarIcon';
import { useUiContext } from '../../../../../src/UIProvider';
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
            {[1, 2, 3, 4, 5].map((item) => (
                <TouchableOpacity style={styles.button} key={`${item}`} onPress={() => onChangeRate(item, id)}>
                    <RateStarIcon color={item > rate ? 'gray' : undefined} />
                </TouchableOpacity>
            ))}
        </View>
    )
}
