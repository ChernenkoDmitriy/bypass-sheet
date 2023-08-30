import React, { FC, useMemo, memo } from 'react';
import { Text, Pressable, ActivityIndicator, View, ViewStyle } from 'react-native';
import { AddIcon } from '../../../../../../assets/icons/AddIcon';
import { PlusIcon } from '../../../../../../assets/icons/PlusIcon';
import { useUiContext } from '../../../../../UIProvider';
import { getStyle } from './styles';

interface IProps {
    onPress: () => void;
}

export const ButtonAddItem: FC<IProps> = memo(({ onPress }) => {
    const { colors, t } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);

    return (
        <Pressable
            style={({ pressed }) => [styles.container, { opacity: pressed ? 0.7 : 1 }]}
            onPress={onPress}
        >
            <Text style={styles.text}>{t('addItem')}</Text>
            <AddIcon color={colors.regularText} />
        </Pressable>
    );
})
