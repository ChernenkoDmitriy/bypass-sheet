import { StyleSheet } from 'react-native';
import { IColors } from '../../../../UIProvider/colors/IColorsController';

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            height: 30,
            paddingHorizontal: 15,
            borderRadius: 25,
            backgroundColor: colors.background,
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
            elevation: 1,
            shadowColor: colors.titleText,
            shadowOffset: {
                width: 0,
                height: 0,
            },
            shadowOpacity: 0.01,
        },
        title: {
            fontSize: 14,
            lineHeight: 18,
            color: colors.titleText,
            fontFamily: 'Roboto-Light'
        },
    });
    return styles;
};