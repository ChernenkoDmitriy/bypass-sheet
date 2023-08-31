import { observer } from 'mobx-react';
import React, { FC, useMemo } from 'react';
import { View } from 'react-native';
import Animated from 'react-native-reanimated';
import { useUiContext } from '../../../UIProvider';
import { useLaunchApp } from '../presenters/useLaunchApp';
import { getStyle } from './styles';

export const LaunchAppView: FC = observer(() => {
    const { colors, t } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);
    useLaunchApp();
    return (
        <View style={styles.container}>
            <Animated.Image
                source={require('../../../../assets/img/logo.png')}
                style={styles.logo}
            />
        </View>
    );
});