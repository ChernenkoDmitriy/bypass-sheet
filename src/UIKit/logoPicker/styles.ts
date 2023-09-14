import { StyleSheet } from 'react-native';
import { scaleFontSize } from '../../utils/Utils';
import { IColors } from '../../UIProvider/colors/IColorsController';

export const getStyle = (colors: IColors) => {
    return StyleSheet.create({
        container: {
            height: scaleFontSize(50),
            width:  scaleFontSize(50),
            borderRadius: 50,
            backgroundColor: colors.primary,
            justifyContent: 'center',
            alignItems: 'center',
        },
        logo: {
            height: 50,
            width: 50,
            borderRadius: 50,
            justifyContent: 'center',
            alignItems: 'center',
        },
        logoText: {
            fontSize: scaleFontSize(16),
            fontFamily: 'Roboto-Medium',
            color: colors.text,
        },
    });
}
