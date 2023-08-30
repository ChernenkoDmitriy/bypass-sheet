import React, { FC, useCallback, useMemo } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { EditRoundIcon } from '../../../../../../assets/icons/EditRoundIcon';
import { LocationIcon } from '../../../../../../assets/icons/LocationIcon';
import { useUiContext } from '../../../../../UIProvider';
import { IBypassSheet } from '../../../../shared/entities/bypassList/IBypassSheet';
import { getStyle } from './styles';

interface IProps {
    item: IBypassSheet;
    onPress: (item: IBypassSheet) => void;
    onEditItem: (item: IBypassSheet) => void;
}

export const BypassSheetRaw: FC<IProps> = ({ item, onPress, onEditItem }) => {
    const { colors } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);

    const onHandlePress = useCallback(() => {
        onPress(item);
    }, [item]);

    const onHandleEdit = useCallback(() => {
        onEditItem(item);
    }, [item]);

    return (<TouchableOpacity style={styles.container} onPress={onHandlePress}>
        <View style={styles.titleWrapper}>
            <Text style={styles.title} numberOfLines={2}>{item.title}</Text>
            {item.address ? <View style={styles.location}>
                <LocationIcon />
                <Text style={styles.address} numberOfLines={1}>{item.address}</Text>
            </View> : null}
        </View>
        <TouchableOpacity hitSlop={{ top: 20, left: 20, right: 20, bottom: 20 }} style={styles.editButton} onPress={onHandleEdit}>
            <EditRoundIcon />
        </TouchableOpacity>
    </TouchableOpacity>

    )
}
