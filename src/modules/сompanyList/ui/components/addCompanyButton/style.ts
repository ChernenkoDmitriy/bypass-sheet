import { StyleSheet } from "react-native";
import { IColors } from "../../../../../UIProvider/colors/IColorsController";
import { scaleHorizontal, scaleVertical } from "../../../../../utils/Utils";

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            zIndex:20,
            backgroundColor: colors.buttonText,
            width: scaleVertical(60),
            height: scaleVertical(60),
            borderRadius: 50,
            position:'absolute',
            bottom: scaleVertical(30),
            right: scaleHorizontal(10),
            alignItems: 'center',
            justifyContent: "center",
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