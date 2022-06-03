import React, { FC, useMemo, memo } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { ArrowIosRight } from '../../../../../assets/icons/arrows/ArrowIosRight';
import { useUiContext } from '../../../../../src/UIProvider';
import { getStyle } from './styles';

interface IProps {
    title: string;
    description?: string;
    onPress: () => void;
}

export const SettingButton: FC<IProps> = memo(({ onPress, title, description }) => {
    const { colors } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);

    return (
        <TouchableOpacity onPress={onPress} >
            <View style={styles.container}>
                <View style={styles.textContainer}>
                    <Text numberOfLines={1} style={styles.title}>{title}</Text>
                    {!!description && <Text numberOfLines={2} style={styles.description}>{description}</Text>}
                </View>
                <ArrowIosRight color={colors.icon}/>
            </View>
        </TouchableOpacity>
    );
});
