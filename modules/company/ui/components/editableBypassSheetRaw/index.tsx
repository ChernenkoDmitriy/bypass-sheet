import React, { FC, useCallback, useMemo } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { DeleteCircleIcon } from '../../../../../assets/icons/DeleteCircleIcon';
import { EditRoundIcon } from '../../../../../assets/icons/EditRoundIcon';
import { useUiContext } from '../../../../../src/UIProvider';
import { bypassListModel } from '../../../../shared/entities/bypassList/BypassListModel';
import { IBypassSheet } from '../../../../shared/entities/bypassList/IBypassSheet';
import { getStyle } from './styles';

interface IProps {
    item: IBypassSheet;
}

export const EditableBypassSheetRaw: FC<IProps> = ({ item }) => {
    const { colors } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);

    const onEdit = () => {

    }

    const onDelete = () => {
        bypassListModel.deleteCompanyItem(item.id);
    }

    return (
        <View style={styles.container} >
            <View style={styles.textWrapper}>
                <Text style={styles.title} numberOfLines={2}>{item.title}</Text>
            </View>
            {/* <TouchableOpacity style={styles.button}>
                <EditRoundIcon />
            </TouchableOpacity> */}
            <TouchableOpacity style={styles.button} onPress={onDelete}>
                <DeleteCircleIcon />
            </TouchableOpacity>
        </View>
    )
}
