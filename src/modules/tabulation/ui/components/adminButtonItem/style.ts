import { StyleSheet } from "react-native";
import { IColors } from "../../../../../UIProvider/colors/IColorsController";
import { scaleFontSize, scaleHorizontal, scaleVertical } from "../../../../../utils/Utils";

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            width:scaleHorizontal(70),
            borderWidth: 0.5,
            borderColor: colors.primary,
            marginTop: scaleVertical(15),
            height: scaleVertical(60),
            borderRadius: 8,
            alignItems: 'center',
            justifyContent: 'center',
        },
        title: {
            fontSize: scaleFontSize(22),
            color: colors.text,
            fontFamily: 'Roboto-Regular',
        },
    });
    return styles;
};