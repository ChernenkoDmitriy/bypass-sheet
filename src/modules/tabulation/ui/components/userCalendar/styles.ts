import { StyleSheet } from 'react-native';
import { scaleFontSize, scaleHorizontal, scaleVertical } from '../../../../../utils/Utils';
import { IColors } from '../../../../../UIProvider/colors/IColorsController';

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            marginTop:scaleVertical(10)
        },
        title: {
            fontFamily: 'Roboto-Regular',
            fontSize: scaleFontSize(16),
            color: colors.text,
            marginTop: scaleVertical(20),
            marginLeft: scaleHorizontal(40),
        },
        calendar: {
            alignSelf: 'center',
            width: scaleHorizontal(301),
            borderRadius: 12,

        },
        daysTitle: {
            fontFamily: 'Roboto-Regular',
            fontSize: scaleFontSize(16),
            color: colors.text,
            marginTop: scaleVertical(30),
            marginLeft: scaleVertical(35)
        },
        dayEvent: {
        },
    });
    return styles;
};
