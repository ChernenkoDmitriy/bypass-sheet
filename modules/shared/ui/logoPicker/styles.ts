import { StyleSheet } from 'react-native';
import { IColors } from '../../../../src/colorTheme';

export const getStyle = (colors: IColors) => {
    return StyleSheet.create({
        container: {
            height: 60,
            width: 60,
            borderRadius: 50,
            backgroundColor: colors.accentText,
            justifyContent: 'center',
            alignItems: 'center',
        },
        logo: {
            height: 60,
            width: 60,
            borderRadius: 50,
            justifyContent: 'center',
            alignItems: 'center',
        },
    });
}
