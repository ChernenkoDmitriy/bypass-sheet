import React, { FC, useMemo, memo } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { CloseIcon } from '../../../../../assets/icons/CloseIcon';
import { useUiContext } from '../../../../../src/UIProvider';
import { getStyle } from './styles';

interface IProps {
    onClose: () => void;
}

export const SettingsHeader: FC<IProps> = memo(({ onClose }) => {
    const { colors } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onClose} >
                <View style={styles.iconWrapper}>
                    <CloseIcon color={colors.icon} />
                </View>
            </TouchableOpacity>
        </View>
    );
});
