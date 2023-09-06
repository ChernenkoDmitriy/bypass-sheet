import React, { FC, memo, useCallback, useMemo } from 'react';
import { View, TextInput, TouchableOpacity, ViewStyle } from 'react-native';
import { useUiContext } from '../../UIProvider';
import { getStyle } from './styles';
import { SearchIcon } from '../../../assets/icons/SearchIcon';

interface Props {
    value?: string;
    placeholder?: string;
    isFastSearch?: boolean;
    sort?: boolean;
    filter?: boolean;
    containerStyle?: ViewStyle;
    onChangeText?: (value: string) => void;
    onBlur?: () => void;
    onOpenFilters?: () => void;
    onOpenSorting?: () => void;
    onClose?: () => void;
    onChange?:()=>void;
};

export const Search: FC<Props> = memo(({ value = '', filter = true, placeholder,onChange, onChangeText, onOpenSorting, onClose, containerStyle }) => {
    const { colors, t } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);

    return (
        <View style={[styles.container, containerStyle]}>
            <View style={styles.inputContainer}  >
                <View style={styles.searchContainer}>
                    <SearchIcon color={colors.primary} />
                </View>
                <TextInput
                    style={styles.input}
                    placeholder={placeholder || t('searchPlaceholder')}
                    placeholderTextColor={colors.inactiveText}
                    value={value}
                    onChange={onChange}
                    onChangeText={onChangeText}
                />
            </View>
        </View>
    );
});