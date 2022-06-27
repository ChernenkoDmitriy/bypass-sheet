import { StyleSheet } from 'react-native';
import { IColors } from '../../../../../src/UIProvider/colors/IColorsController';
import { scaleHorizontal } from '../../../../../src/utils/Utils';

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            flexDirection: 'row',
            height: scaleHorizontal(35),
            justifyContent: 'space-between',
            marginTop: 16,
        },
        button: {
            width: scaleHorizontal(42),
            height: scaleHorizontal(30),
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 1,
            borderColor: colors.lightButton,
            borderRadius: 4,
        },
        title: {
            fontFamily: 'Roboto-Regular',
            fontSize: 16,
            color: colors.titleText,
        },
    });
    return styles;
};