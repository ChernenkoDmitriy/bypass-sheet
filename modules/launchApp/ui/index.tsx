import { observer } from 'mobx-react';
import React, { FC, useMemo } from 'react';
import { View, Text } from 'react-native';
import { useUiContext } from '../../../src/UIProvider';
import { useLaunchApp } from '../presenters/useLaunchApp';
import { getStyle } from './styles';

export const LaunchAppView: FC = observer(() => {
    const { colors, t } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);
    useLaunchApp();

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{t('appName')?.toUpperCase()}</Text>
        </View>
    )
})
