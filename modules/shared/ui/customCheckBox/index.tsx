import React, { FC, useMemo } from 'react';
import CheckBox from '@react-native-community/checkbox';
import { getStyle } from './styles';
import { IColors } from '../../../../src/UIProvider/colors/IColorsController';

interface Props {
    colors: IColors;
    value: boolean;
    onChoose?: () => void
}

export const CustomCheckBox: FC<Props> = ({ colors, onChoose, value }) => {
    const styles = useMemo(() => getStyle(colors), [colors]);

    return (
        <CheckBox
            hitSlop={{ right: 40, left: 40, top: 40, bottom: 40 }}
            disabled={!onChoose}
            value={value}
            onValueChange={onChoose}
            tintColors={{ true: colors.accentColorLight }}
            tintColor={colors.inactiveText}
            boxType={'circle'}
            style={styles.checkBox}
        />
    );
}
