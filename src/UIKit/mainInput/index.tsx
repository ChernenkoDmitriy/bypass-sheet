import React, { FC, useCallback, useEffect, useMemo, useState } from 'react';
import { TextInput, Text, View, ViewStyle, TouchableOpacity, TextStyle, TextInputProps, NativeSyntheticEvent, TextInputFocusEventData } from 'react-native';
import { useUiContext } from '../../UIProvider';
import { getStyle } from './styles';
import { ClosedEyeIcon } from '../../../assets/icons/closedEyeIcon';
import { EyeIcon } from '../../../assets/icons/EyeIcon';

interface IProps extends TextInputProps {
    value?: string;
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

export const MainInput: FC<IProps> = ({ title = '', value = '', defaultPrefix, errorText = '', isValid = true, isShowErrors = true, isNormalizeOnFocus = false, containerStyle, titleStyle, inputWrapperStyle, inputStyle, placeholderTextColor, ...otherProps }) => {
    const { colors } = useUiContext();
    const [isFocus, setIsFocus] = useState(isNormalizeOnFocus);
    const [isSecure, setIsSecure] = useState(otherProps.secureTextEntry || false);
    const styles = useMemo(() => getStyle(colors, isFocus || isValid), [colors, isFocus, isValid]);

    const onPress = useCallback(() => setIsSecure(prevState => !prevState), []);

    const handleOnFocus = useCallback((event: NativeSyntheticEvent<TextInputFocusEventData>) => {
        otherProps?.onFocus?.(event);
        setIsFocus(true);
    }, [otherProps?.onFocus]);

    const handleOnBlur = useCallback((event: NativeSyntheticEvent<TextInputFocusEventData>) => {
        otherProps?.onBlur?.(event);
        setIsFocus(false);
    }, [otherProps?.onBlur]);

    return (
        <View style={[styles.container, containerStyle]}>
            <Text style={[styles.inputTitle, titleStyle, { opacity: !isFocus && !value ? 0 : 1 }]}>{title}</Text>
            <View style={[styles.inputWrapper, inputWrapperStyle]}>
                {!!defaultPrefix && <Text style={[styles.prefixText, inputStyle]}>{defaultPrefix}</Text>}
                <TextInput
                    {...otherProps}
                    style={[styles.input, inputStyle]}
                    selectionColor={colors.primary}
                    value={value}
                    placeholder={!isFocus ? title : ''}
                    placeholderTextColor={placeholderTextColor || colors.subText}
                    onBlur={handleOnBlur}
                    onFocus={handleOnFocus}
                    secureTextEntry={isSecure}
                />
                {otherProps?.secureTextEntry &&
                    <TouchableOpacity style={styles.eyeIcon} onPress={onPress}>
                        {isSecure
                            ? <ClosedEyeIcon color={colors.primary} />
                            : <EyeIcon color={colors.primary} />
                        }
                    </TouchableOpacity>
                }
            </View>
            {isShowErrors && <Text numberOfLines={1} style={styles.errorText}>{errorText}</Text>}
        </View>
    );
};