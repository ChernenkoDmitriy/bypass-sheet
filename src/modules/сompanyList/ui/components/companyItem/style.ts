import { StyleSheet } from "react-native";
import { IColors } from "../../../../../UIProvider/colors/IColorsController";
import { scaleHorizontal, scaleVertical } from "../../../../../utils/Utils";

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            backgroundColor: colors.buttonText,
           
            shadowColor: "#000000",
            shadowOffset: {
                width: 0,
                height: 18,
            },
            shadowOpacity: 0.25,
            shadowRadius: 20.00,
            elevation: 24
        },
    });
    return styles;
};