import { StyleSheet } from "react-native";
import { IColors } from "../../../../UIProvider/colors/IColorsController";
import { scaleFontSize, scaleHorizontal, scaleVertical } from "../../../../utils/Utils";

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            paddingHorizontal: scaleHorizontal(15),
        },
        title: {
            fontSize: scaleFontSize(18),
            color: colors.error,
            fontFamily: 'Roboto-Regular',
            textAlign: 'center',
        },
        text: {
            fontSize: scaleFontSize(12),
            color: colors.text,
            fontFamily: 'Roboto-Regular',
            textAlign: 'center',
            marginTop:scaleVertical(5)
        },
        button: {
            width: '100%',
            height: scaleVertical(90),
            borderRadius: 9,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: colors.primary,
            marginTop:scaleVertical(40)
        },
    });
    return styles;
};