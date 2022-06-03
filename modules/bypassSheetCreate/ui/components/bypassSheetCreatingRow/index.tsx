
import React, { FC, useCallback, useMemo } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { DeleteIcon } from '../../../../../assets/icons/DeleteIcon';
import { useUiContext } from '../../../../../src/UIProvider';
import { CustomInput } from '../../../../shared/ui/customInput';
import { getStyle } from './styles';

interface Props {
    sortNumber: number;
    id: number;
    value: string;
    onChangeText: (text: string, id: number) => void;
    onDeleteItem: (id: number) => void;
}

export const BypassSheetCreatingRow: FC<Props> = ({ id, value, sortNumber, onChangeText, onDeleteItem }) => {
    const { colors, t } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);

    const onHandlePress = useCallback((text: string) => {
        onChangeText(text, id);
    }, []);

    const onHandleDelete = useCallback(() => {
        onDeleteItem(id);
    }, []);


    return (
        <View style={styles.container}>
            <View style={styles.sideContainer}>
                <Text style={styles.sortNumber}>{sortNumber}</Text>
            </View>
            <View style={styles.inputWrapper}>
                <CustomInput value={value} onChangeText={onHandlePress} placeholder={t('taskDescribe')} containerStyle={styles.input} />
            </View>
            <TouchableOpacity style={styles.sideContainer} onPress={onHandleDelete}>
                <DeleteIcon />
            </TouchableOpacity>
        </View>
    )
}
