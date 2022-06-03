import React, { FC, useMemo, useState, memo } from 'react';
import { TextInput, View, Text, TouchableOpacity } from 'react-native';
import { useUiContext } from '../../../../src/UIProvider';
import { getStyle } from './styles';

interface Props {
    value: string;
    placeholder: string;
    keyboardType?:
    | 'default'
    | 'email-address'
    | 'numeric'
    | 'phone-pad'
    | 'number-pad'
    | 'decimal-pad'
    | undefined;
    icon?: React.ReactNode;
    errorMessage?: string;
    secureTextEntry?: boolean;
    onChangeText: (text: string) => void;
    onFocus?: () => void;
    onBlur?: () => void;
    onPressIcon?: () => void;
}

export const InputWithValidation: FC<Props> = memo(
    ({
        value,
        errorMessage,
        secureTextEntry,
        onChangeText,
        placeholder,
        icon,
        keyboardType,
        onFocus,
        onBlur,
        onPressIcon,
    }) => {
        const { colors } = useUiContext();
        const styles = useMemo(() => getStyle(colors), [colors]);
        const [isFocused, setIsFocused] = useState(false);

        const onFocusFn = () => {
            onFocus && onFocus();
            setIsFocused(true);
        };

        const onBlurFn = () => {
            onBlur && onBlur();
            setIsFocused(false);
        };

        return (
            <View style={styles.container}>
                <View
                    style={[
                        styles.inputContainer,
                        {
                            borderColor: isFocused
                                ? colors.regularText
                                : colors.inactiveText,
                        },
                    ]}>
                    <TextInput
                        caretHidden={false}
                        secureTextEntry={secureTextEntry}
                        keyboardType={keyboardType || 'default'}
                        placeholderTextColor={colors.inactiveText}
                        style={styles.textInput}
                        value={value}
                        onChangeText={onChangeText}
                        placeholder={placeholder}
                        onFocus={onFocusFn}
                        onBlur={onBlurFn}
                    />
                    {icon ? (
                        <TouchableOpacity
                            onPress={onPressIcon}
                            disabled={!onPressIcon}
                            style={styles.iconWrapper}>
                            {icon}
                        </TouchableOpacity>
                    ) : null}
                </View>
                {errorMessage ? (
                    <Text style={styles.errorText}>{errorMessage}</Text>
                ) : null}
            </View>
        );
    },
);
