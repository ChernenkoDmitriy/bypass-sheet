import { observer } from 'mobx-react';
import React, { FC, useMemo } from 'react';
import { Text, View } from 'react-native';
import { ToastConfigParams } from 'react-native-toast-message';
import { useUiContext } from '../../../src/UIProvider';
import { getStyle } from './styles';

interface IProps extends ToastConfigParams<{}> {
    error?: boolean;
};

export const ToastView: FC<IProps> = observer(({ text1, text2, error = false, props }) => {
    const { colors, t } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);

    return (
        <View style={styles.container} >
            <Text style={[styles.title, { color: error ? colors.error : colors.text }]}>{text1 && t(text1)}</Text>
            <Text style={styles.text}>{text2}</Text>
        </View>
    );
});