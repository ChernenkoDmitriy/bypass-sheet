import React, { FC, memo, useMemo } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { TrashIcon } from '../../../../../../assets/icons/TrashIcon';
import { useUiContext } from '../../../../../UIProvider';
import { getStyle } from './styles';

interface IProps {
    isEditable: boolean;
    onPress: () => void;
}

export const BypassTitle: FC<IProps> = memo(({ onPress, isEditable }) => {
    const { colors, t } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);

    return <View style={styles.container} >
        <View style={styles.sideWrapper}>
            <Text style={styles.title}>{t('commonInformation')}</Text>
        </View>
        {isEditable ? <TouchableOpacity style={styles.sideWrapperRight} onPress={onPress}>
            <TrashIcon />
            <Text style={styles.buttonText}>{t('deleteObject')}</Text>
        </TouchableOpacity> : null}
    </View>
})
