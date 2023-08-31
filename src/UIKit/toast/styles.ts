import { StyleSheet } from 'react-native';
import { scaleFontSize, scaleHorizontal, scaleVertical } from '../../utils/Utils';
import { IColors } from '../../UIProvider/colors/IColorsController';

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            width: scaleHorizontal(345),
            paddingHorizontal: scaleHorizontal(22),
            paddingVertical: scaleVertical(16),
            borderRadius: 12,
            backgroundColor: colors.card,
        },
        title: {
            fontFamily: 'Roboto-Regular',
            fontSize: scaleFontSize(16),
        },
        text: {
            fontFamily:'Roboto-Regular',
            color: colors.subText,
            fontSize: scaleFontSize(14),
            maxWidth: scaleHorizontal(210),
            marginLeft: scaleVertical(10),
            marginTop: scaleVertical(10),
        },
    });
    return styles;
};