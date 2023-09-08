import React, { FC, useMemo } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { getStyle } from './styles';
import { useUiContext } from '../../../../../UIProvider';

interface IProps {
    isDisableButton: boolean;
    onSaveCustomDate: () => void;
    onCancel: () => void;
};

export const CalendarFooter: FC<IProps> = ({ isDisableButton, onSaveCustomDate, onCancel }) => {
    const { colors, t } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);

    return (
        <View style={styles.container}>
            <View style={styles.buttonsWrapper}>
                <TouchableOpacity style={styles.cancelButton} onPress={onCancel}>
                    <Text style={styles.cancelText}>{t('cancel')}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    disabled={isDisableButton}
                    style={[styles.saveButton, isDisableButton
                        ? { backgroundColor: colors.card }
                        : { backgroundColor: colors.primary }]}
                    onPress={onSaveCustomDate}
                >
                    <Text style={styles.saveText}>{t('save')}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};