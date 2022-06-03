import React, { FC, useMemo } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { useUiContext } from '../../../../src/UIProvider';
import { getStyle } from './styles';

export const ListLoader: FC = () => {
    const { colors } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);

    return <View style={styles.container} >
        <ActivityIndicator size={'large'} />
    </View>
};
