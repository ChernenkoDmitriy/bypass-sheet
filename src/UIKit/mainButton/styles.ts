import { StyleSheet } from "react-native";
import { scaleFontSize, scaleHorizontal, scaleVertical } from "../../utils/Utils";
import { IColors } from "../../UIProvider/colors/IColorsController";

export const getStyle = (isButtonDisabled: boolean, colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            borderRadius: 7,
            overflow: 'hidden',
            height: scaleVertical(44),
            opacity: isButtonDisabled ? 0.6 : 0.9,
            backgroundColor: colors.primary,
            justifyContent: 'center',
            alignItems: 'center'
        },
        iconWrapper: {
            marginRight: scaleHorizontal(15),
            marginBottom: scaleVertical(4),
        },
        title: {
            fontSize: scaleFontSize(14),
            color: colors.text,
            alignItems: 'center',
            marginBottom: scaleVertical(2),
            fontFamily: 'Roboto-regular',
        },
    });
    return styles;
};