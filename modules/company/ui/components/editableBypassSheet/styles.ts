import { StyleSheet } from 'react-native';
import { IColors } from '../../../../../src/UIProvider/colors/IColorsController';

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            margin: 16,
        },
        contentContainerStyle: {
            paddingBottom: 10,
            flexGrow: 1,
        },
        title: {
            marginVertical: 16,
            fontSize: 14,
            lineHeight: 18,
            color: colors.titleText,
            fontFamily: 'Roboto-Regular'
        },
    });
    return styles;
}
