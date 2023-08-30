import { useNavigation } from '@react-navigation/native';
import React, { FC, memo, useMemo } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { PlusRoundIcon } from '../../../../../../assets/icons/PlusRoundIcon';
import { useUiContext } from '../../../../../UIProvider';
import { getStyle } from './styles';

interface IProps {
    companyId: number;
}

export const AddBypassSheetRaw: FC<IProps> = memo(({ companyId }) => {
    const { colors, t } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);
    const navigation = useNavigation<any>();

    const onPress = () => {
        navigation.navigate('BypassSheetCreateView', { companyId });
    }

    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text style={styles.title} numberOfLines={2}>{t('addBypassSheet')}</Text>
            <PlusRoundIcon color={colors.icon} width={32} height={32} />
        </TouchableOpacity>
    )
})
