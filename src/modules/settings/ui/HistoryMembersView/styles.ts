import { StyleSheet } from 'react-native';
import { IColors } from '../../../../UIProvider/colors/IColorsController';
import { scaleFontSize, scaleHorizontal, scaleVertical } from '../../../../utils/Utils';

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            flex: 1
        },
        button: {
            marginVertical: scaleVertical(10),
        },
        buttonWrapper: {
            marginVertical: scaleVertical(30),
            paddingHorizontal: scaleHorizontal(40)
        },
        buttonText: {
            fontSize: scaleFontSize(18),
            color: colors.primary,
            textAlign: 'center'
        },
        flatListTitle: {
            flexDirection: 'row',
            paddingHorizontal: scaleHorizontal(15),
            justifyContent: 'space-between',
        },
        text: {
            fontSize: scaleFontSize(14),
            color: colors.text,
            marginLeft: scaleHorizontal(10)
        },
        title: {
            fontSize: scaleFontSize(24),
            color: colors.text,
            textAlign: "center",
            marginVertical:scaleVertical(20)
        }
    });
    return styles;
};