import React, { FC, useMemo, memo } from 'react';
import { Text, Pressable, ActivityIndicator, View, ViewStyle } from 'react-native';
import { useUiContext } from '../../../../src/UIProvider';
import { getStyle } from './styles';

interface Props {
    containerStyle?: ViewStyle;
    title: string;
    onPress: () => void;
    disabled?: boolean;
    inProgress?: boolean;
}

export const MainButton: FC<Props> = memo(({ onPress = () => { }, title = '', disabled = false, inProgress = false, containerStyle = {} }) => {
    const { colors } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);

    return (
        <Pressable
            disabled={disabled}
            style={({ pressed }) => [styles.container, containerStyle, { opacity: pressed || disabled ? 0.7 : 1 }]}
            onPress={onPress}
        >
            <Text style={styles.text}>{title?.toUpperCase()}</Text>
            {inProgress ? <View style={styles.absoluteSheet}><ActivityIndicator color={colors.accentColorLight} size='large' /></View> : null}
        </Pressable>
    );
})
