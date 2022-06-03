import { StyleSheet } from 'react-native';
import { IColors } from '../../../../../src/UIProvider/colors/IColorsController';

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            flexDirection: 'row',
            height: 40,
            alignItems: 'center',
            alignSelf: 'flex-end',
        },
        title: {
            fontSize: 16,
            lineHeight: 20,
            color: colors.titleText,
            fontFamily: 'Roboto-Light',
            marginHorizontal: 10,
        },
    });
    return styles;
};