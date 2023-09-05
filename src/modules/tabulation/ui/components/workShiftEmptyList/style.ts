import { StyleSheet } from "react-native";
import { IColors } from "../../../../../UIProvider/colors/IColorsController";
import { scaleFontSize, scaleHorizontal, scaleVertical } from "../../../../../utils/Utils";

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems:'center'
        },
        title: {
            fontSize: scaleFontSize(18),
            color: colors.text,
            fontFamily: 'Roboto-Regular',
            marginTop:scaleVertical(240),
            marginBottom:scaleVertical(20)
        },
    });
    return styles;
};