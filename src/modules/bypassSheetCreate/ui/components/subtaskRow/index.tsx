
import React, { FC, useCallback, useMemo } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { DeleteIcon } from '../../../../../../assets/icons/DeleteIcon';
import { useUiContext } from '../../../../../UIProvider';
import { CustomInput } from '../../../../shared/ui/customInput';
import { getStyle } from './styles';

interface Props {
    sortNumber: number;
    id: number;
    value: string;
    onChangeText: (text: string, id: number) => void;
    onDeleteItem: (id: number) => void;
}

export const SubtaskRow: FC<Props> = ({ id, value, sortNumber, onChangeText, onDeleteItem }) => {
    const { colors, t } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);

    const onHandleChangeText = useCallback((text: string) => {
        onChangeText(text, id);
    }, []);

    const onHandleDelete = useCallback(() => {
        onDeleteItem(id);
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.topContainer}>
                <View style={styles.inputWrapper}>
                    <CustomInput value={value} onChangeText={onHandleChangeText} placeholder={t('taskDescribe')} containerStyle={styles.input} />
                </View>
                <TouchableOpacity style={styles.sideContainer} onPress={onHandleDelete}>
                    <DeleteIcon />
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.buttonText} onPress={() => { }}>
                <Text style={styles.addSubtaskText}>{t('addSubtask')}</Text>
            </TouchableOpacity>
        </View>

    )
}
