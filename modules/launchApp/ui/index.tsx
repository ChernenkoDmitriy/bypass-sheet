import { observer } from 'mobx-react';
import React, { FC, useMemo } from 'react';
import { View } from 'react-native';
import Animated, { interpolate, interpolateNode } from 'react-native-reanimated';
import { useUiContext } from '../../../src/UIProvider';
import { useLaunchApp } from '../presenters/useLaunchApp';
import { getStyle } from './styles';

export const LaunchAppView: FC = observer(() => {
    const { colors, t } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);
    const { animValue } = useLaunchApp();

    return (
        <View style={styles.container}>
            <Animated.Image style={[styles.logo, {
                opacity: animValue,
                transform: [{
                    scale: interpolateNode(animValue, { inputRange: [0, 1], outputRange: [0.9, 1], })
                }]
            }]} source={require('../../../assets/img/logo.png')} />
        </View>
    )
})
