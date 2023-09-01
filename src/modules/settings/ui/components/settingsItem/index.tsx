import { observer } from 'mobx-react';
import React, { FC, ReactElement, useMemo } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useUiContext } from '../../../../../UIProvider';
import { getStyle } from './styles';
import { View, Text, TouchableOpacity, Switch, ViewStyle } from 'react-native';

interface IProps {
    title: string;
    value?: boolean;
    text?: string;
    switchV: boolean;
    containerStyle?: ViewStyle;
    icon?: ReactElement;
    onPress?: () => void;
    onSwitchValueChange?: (isReminderOn: boolean) => void;
};

export const SettingsItem: FC<IProps> = ({ title, switchV, containerStyle, value, icon, text, onPress, onSwitchValueChange }) => {
    const { t, colors } = useUiContext();
    const navigation = useNavigation<StackNavigationProp<any>>();
    const styles = useMemo(() => getStyle(colors), [colors]);

    return (
        <TouchableOpacity style={[styles.container, containerStyle]} onPress={onPress}>
            <View style={{ flexDirection: 'row' }}>
                {icon}
                <Text style={styles.title}>{title}</Text>
            </View>
            {switchV ?
                <View style={styles.switchWrapper}>
                    <Text style={styles.text}>{text}</Text>
                    <Switch value={value} onValueChange={onSwitchValueChange} thumbColor={value ? colors.primary : colors.card} trackColor={{ true: colors.primary, false: colors.primary }} />
                </View>
                : null
            }
        </TouchableOpacity>
    );
};