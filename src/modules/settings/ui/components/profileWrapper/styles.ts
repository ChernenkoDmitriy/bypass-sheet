import { StyleSheet } from 'react-native';
import { IColors } from '../../../../../UIProvider/colors/IColorsController';
import { scaleFontSize, scaleHorizontal, scaleVertical } from '../../../../../utils/Utils';

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            width: '100%',
            height: scaleVertical(100),
            borderBottomWidth: 0.5,
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: scaleHorizontal(40),
        },
        text: {
            fontSize: scaleFontSize(18),
            fontFamily: 'Roboto-Regular',
            color: colors.text,
            marginLeft: scaleHorizontal(20),
        },
    });
    return styles;
};