import { StyleSheet } from "react-native";
import { IColors } from "../../../../../UIProvider/colors/IColorsController";
import { scaleFontSize, scaleHorizontal, scaleVertical } from "../../../../../utils/Utils";

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            height: '100%',
            alignItems: 'center',
            zIndex: 20,
        },
        title: {
            fontSize: scaleFontSize(18),
            color: colors.text,
            fontFamily: 'Roboto-Regular',
            marginTop: scaleVertical(240),
            marginBottom: scaleVertical(20),
            textAlign:"center",
        },
    });
    return styles;
};