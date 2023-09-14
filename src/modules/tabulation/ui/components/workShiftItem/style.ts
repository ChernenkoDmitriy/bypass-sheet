import { StyleSheet } from "react-native";
import { IColors } from "../../../../../UIProvider/colors/IColorsController";
import { scaleFontSize, scaleHorizontal, scaleVertical } from "../../../../../utils/Utils";

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            width: '100%',
            borderWidth: 0.5,
            borderColor: colors.primary,
            marginTop: scaleVertical(15),
            borderRadius: 8,
            paddingVertical:scaleVertical(5),
            paddingRight:scaleHorizontal(60)
        },
        title: {
            fontSize: scaleFontSize(22),
            color: colors.text,
            fontFamily: 'Roboto-Regular',
            marginLeft: scaleHorizontal(20)
        },
        text: {
            fontSize: scaleFontSize(18),
            color: colors.text,
            fontFamily: 'Roboto-Regular',
            marginLeft: scaleHorizontal(20),
            marginTop: scaleVertical(10),
        },
        informationWrapper: {
            width: '70%',
            height: '100%',
            paddingVertical: scaleVertical(15),
            justifyContent: 'space-between',
            paddingLeft: scaleHorizontal(15),
        },
        optionsButton: {
            position: 'absolute',
            top: scaleVertical(10),
            right: scaleHorizontal(15),
        },
    });
    return styles;
};