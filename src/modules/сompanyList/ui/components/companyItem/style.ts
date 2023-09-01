import { StyleSheet } from "react-native";
import { IColors } from "../../../../../UIProvider/colors/IColorsController";
import { scaleFontSize, scaleHorizontal, scaleVertical } from "../../../../../utils/Utils";

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            marginTop: scaleVertical(20),
            width: '100%',
            height: scaleVertical(155),
            borderRadius: 9,
            backgroundColor: colors.inactiveText,

            shadowColor: "#000000",
            shadowOffset: {
                width: 0,
                height: 18,
            },
            shadowOpacity: 0.25,
            shadowRadius: 20.00,
            elevation: 24
        },
        informationWrapper: {
            width: '70%',
            height: '100%',
            paddingVertical: scaleVertical(15),
            justifyContent: 'space-between',
            paddingLeft: scaleHorizontal(15)
        },
        optionsButton: {
            position: 'absolute',
            top: 10,
            right: 15,
        },
        text: {
            fontSize: scaleFontSize(18),
            color: colors.text,
            fontFamily: 'Roboto-Regular'
        },
    });
    return styles;
};