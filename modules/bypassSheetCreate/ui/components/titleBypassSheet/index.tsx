
import React, { FC, useMemo } from 'react';
import { View } from 'react-native';
import { useUiContext } from '../../../../../src/UIProvider';
import { CustomInput } from '../../../../shared/ui/customInput';
import { getStyle } from './styles';

interface IProps {
    value: string;
    onChangeText: (text: string) => void;
}

export const TitleBypassSheet: FC<IProps> = ({ value, onChangeText }) => {
    const { colors, t } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);

    return (
        <View style={styles.container}>
            <CustomInput value={value} onChangeText={onChangeText} placeholder={t('title')} containerStyle={styles.input} />
        </View>
    )
}
