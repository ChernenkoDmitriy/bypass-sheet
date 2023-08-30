import React, { FC, useCallback, useMemo, useState } from 'react';
import { TextInput, Text, View, ViewStyle, TouchableOpacity, TextStyle, TextInputProps, NativeSyntheticEvent, TextInputFocusEventData } from 'react-native';
import { useUiContext } from '../../UIProvider';
import { getStyle } from './styles';

interface IProps extends TextInputProps {
    title?: string;
    defaultPrefix?: string;
    errorText?: string;
    isValid?: boolean;
    isShowErrors?: boolean;
    isNormalizeOnFocus?: boolean;
    containerStyle?: ViewStyle;
    titleStyle?: TextStyle;
    inputWrapperStyle?: ViewStyle;
    inputStyle?: TextStyle;
};

export const MainInput: FC<IProps> = ({ title = '', defaultPrefix, errorText = '', isValid = true, isShowErrors = true, isNormalizeOnFocus = true, containerStyle, titleStyle, inputWrapperStyle, inputStyle, placeholderTextColor, ...otherProps }) => {
    const { colors } = useUiContext();
    const [isFocus, setIsFocus] = useState(isNormalizeOnFocus);
    const styles = useMemo(() => getStyle(colors, isFocus || isValid), [colors, isFocus, isValid]);

    const handleOnFocus = useCallback((event: NativeSyntheticEvent<TextInputFocusEventData>) => {
        otherProps?.onFocus?.(event);
        setIsFocus(isNormalizeOnFocus);
    }, [otherProps?.onFocus]);

    const handleOnBlur = useCallback((event: NativeSyntheticEvent<TextInputFocusEventData>) => {
        otherProps?.onBlur?.(event);
        setIsFocus(false);
    }, [otherProps?.onBlur]);

    return (
        <View style={[styles.container, containerStyle]}>
            {title && <Text style={[styles.inputTitle, titleStyle]}>{title}</Text>}
            <View style={[styles.inputWrapper, inputWrapperStyle]}>
                {!!defaultPrefix && <Text style={[styles.prefixText, inputStyle]}>{defaultPrefix}</Text>}
                <TextInput
                    {...otherProps}
                    style={[styles.input, inputStyle]}
                    selectionColor={colors.primary}
                    placeholderTextColor={placeholderTextColor || colors.subText}
                    onBlur={handleOnBlur}
                    onFocus={handleOnFocus}
                />
            </View>
            {isShowErrors && <Text numberOfLines={1} style={styles.errorText}>{errorText}</Text>}
        </View>
    );
};
