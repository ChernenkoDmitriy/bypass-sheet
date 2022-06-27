import { StyleSheet } from 'react-native';
import { IColors } from '../../../../../src/UIProvider/colors/IColorsController';

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            padding: 10,
            borderRadius: 8,
            marginVertical: 10,
            backgroundColor: colors.background,
            elevation: 1,
        },
        title: {
            fontSize: 16,
            lineHeight: 20,
            color: colors.titleText,
            fontFamily: 'Roboto-Regular'
        },
    });
    return styles;
};