import { StyleSheet } from 'react-native';
import { IColors } from '../../../../../src/UIProvider/colors/IColorsController';

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            flexDirection: 'row',
            paddingHorizontal: 20,
            height: 50,
        },
        sideWrapper: {
            flex: 1,
            justifyContent: 'center',
        },
        sideWrapperRight: {
            flex: 1,
            justifyContent: 'flex-end',
            flexDirection: 'row',
            alignItems: 'center',
        },
        title: {
            fontSize: 14,
            lineHeight: 18,
            color: colors.regularText,
            fontFamily: 'Roboto-Bold'
        },
        buttonText: {
            marginLeft: 8,
            fontSize: 14,
            lineHeight: 18,
            color: colors.accentColorLight,
            fontFamily: 'Roboto-Bold'
        }
    });
    return styles;
};