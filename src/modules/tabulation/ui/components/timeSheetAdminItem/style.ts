import { StyleSheet } from "react-native";
import { IColors } from "../../../../../UIProvider/colors/IColorsController";
import { scaleFontSize, scaleHorizontal, scaleVertical } from "../../../../../utils/Utils";

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            marginTop: scaleVertical(10),
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal:scaleHorizontal(15),
            borderBottomWidth:0.2,
        },
        text: {
            fontSize: scaleFontSize(16),
            color: colors.text,
            fontFamily: 'Roboto-Regular',
        },
    });
    return styles;
};