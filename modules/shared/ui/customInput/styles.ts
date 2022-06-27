import { StyleSheet } from 'react-native';
import { IColors } from '../../../../src/UIProvider/colors/IColorsController';

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            minHeight: 50,
            borderBottomColor: colors.shadow,
            borderBottomWidth: 1,
        },
        textInput: {
            flex: 1,
            padding: 0,
            marginHorizontal: 10,
            color: colors.titleText,
            fontSize: 14,
            fontFamily: 'Roboto-Regular',
        },
    });
    return styles;
};