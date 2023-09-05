import { StyleSheet } from "react-native";
import { IColors } from "../../../../UIProvider/colors/IColorsController";
import { scaleFontSize, scaleHorizontal, scaleVertical } from "../../../../utils/Utils";

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            paddingHorizontal:scaleHorizontal(15),
        },
    });
    return styles;
};