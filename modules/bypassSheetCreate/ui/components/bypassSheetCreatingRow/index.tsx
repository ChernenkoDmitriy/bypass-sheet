
import React, { FC, useCallback, useMemo } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { DeleteCircleIcon } from '../../../../../assets/icons/DeleteCircleIcon';
import { useUiContext } from '../../../../../src/UIProvider';
import { CustomInput } from '../../../../shared/ui/customInput';
import { getStyle } from './styles';

interface Props {
    id: number;
    value: string;
    onChangeText: (text: string, id: number) => void;
    onDeleteItem: (id: number) => void;
}

export const BypassSheetCreatingRow: FC<Props> = ({ id, value, onChangeText, onDeleteItem }) => {
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
                    <CustomInput autoFocus value={value} onChangeText={onHandleChangeText} placeholder={t('taskDescribe')} containerStyle={styles.input} />
                </View>
                <TouchableOpacity style={styles.sideContainer} onPress={onHandleDelete}>
                    <DeleteCircleIcon />
                </TouchableOpacity>
            </View>

            {/* <TouchableOpacity style={styles.buttonText} onPress={() => { }}>
                <Text style={styles.addSubtaskText}>{t('addSubtask')}</Text>
            </TouchableOpacity> */}
        </View>
    )
}
