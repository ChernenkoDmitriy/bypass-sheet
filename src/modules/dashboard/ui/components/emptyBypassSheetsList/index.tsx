import React, { FC, useMemo } from 'react';
import { Text, View } from 'react-native';
import { useUiContext } from '../../../../../UIProvider';
import { getStyle } from './styles';

export const EmptyBypassSheetsList: FC = () => {
    const { colors, t } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);

    return (
        <View style={styles.container}>
            <Text style={styles.title}  >{t('emptyBypassSheetList')}</Text>
        </View>
    )
}
