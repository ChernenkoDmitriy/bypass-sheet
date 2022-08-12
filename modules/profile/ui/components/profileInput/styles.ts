import { StyleSheet } from 'react-native';
import { IColors } from '../../../../../src/UIProvider/colors/IColorsController';

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            marginTop: 20,
            marginHorizontal: 20,
        },
        title: {
            fontSize: 18,
            lineHeight: 22,
            fontWeight: '500',
            color: colors.titleText,
        },
        input: {
            paddingHorizontal: 10,
            marginTop: 10,
            borderRadius: 8,
            backgroundColor: colors.card,
            fontSize: 18,
            lineHeight: 22,
            fontWeight: '500',
            color: colors.titleText,
        },
    });
    return styles;
}
