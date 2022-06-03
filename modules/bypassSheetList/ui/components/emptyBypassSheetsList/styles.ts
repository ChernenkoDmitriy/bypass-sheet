import { StyleSheet } from 'react-native';
import { IColors } from '../../../../../src/UIProvider/colors/IColorsController';

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            flexGrow: 1,
            justifyContent: 'center',
            alignSelf: 'center',
            paddingHorizontal: 40,
        },
        title: {
            textAlign: 'center',
            fontSize: 16,
            lineHeight: 20,
            color: colors.titleText,
            fontFamily: 'Roboto-Light',
            marginHorizontal: 10,
        },
    });
    return styles;
};