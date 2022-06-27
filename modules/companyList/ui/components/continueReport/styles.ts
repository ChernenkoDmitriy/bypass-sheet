import { StyleSheet } from 'react-native';
import { IColors } from '../../../../../src/UIProvider/colors/IColorsController';

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            flexDirection: 'row',
            height: 26,
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: colors.titleText,
            elevation: 1,
            paddingLeft: 12,
            paddingRight: 8,
        },
        rightContemner: {
            flexDirection: 'row',
        },
        title: {
            fontSize: 14,
            lineHeight: 20,
            color: colors.card,
            fontFamily: 'Roboto-Regular'
        },
    });
    return styles;
};