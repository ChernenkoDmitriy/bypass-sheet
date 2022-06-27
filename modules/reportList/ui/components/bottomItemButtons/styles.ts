import { StyleSheet } from 'react-native';
import { IColors } from '../../../../../src/UIProvider/colors/IColorsController';
import { scaleHorizontal } from '../../../../../src/utils/Utils';

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            flexDirection: 'row',
            height: scaleHorizontal(35),
            justifyContent: 'space-between',
            marginTop: 12,
        },
        button: {
            flexDirection: 'row',
            flex: 1,
            height: scaleHorizontal(30),
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: colors.lightButton,
            borderRadius: 4,
        },
        textButton: {
            fontFamily: 'Roboto-Light',
            fontSize: 14,
            color: colors.titleText,
            marginLeft: 12,
        },
    });
    return styles;
};