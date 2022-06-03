import React, { FC, useMemo } from 'react';
import { Text, View } from 'react-native';
import { getStyle } from './styles';
import { useUiContext } from '../../../../src/UIProvider';

interface IProps {
    text: string;
}

export const EmptyListView: FC<IProps> = ({ text }) => {
    const { colors } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);

    return (
        <View style={styles.container}>
            <Text numberOfLines={1} style={styles.title} >{text}</Text>
        </View>
    )
}
