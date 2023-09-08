import { StyleSheet } from "react-native";
import { IColors } from "../../../../../UIProvider/colors/IColorsController";
import { scaleFontSize, scaleHorizontal, scaleVertical } from "../../../../../utils/Utils";

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            width: '100%',
            borderTopWidth: 0.5,
            borderBottomWidth: 0.5,
            borderColor: colors.primary,
            height: scaleVertical(150),
            flexDirection: 'row',
            marginTop: scaleVertical(5)
        },
        wrapper: {
            marginLeft: scaleHorizontal(10),
        },
        avatar: {
            height: scaleVertical(150),
            width: scaleVertical(150),
            borderRadius: 7,
            backgroundColor: colors.primary,
            justifyContent: 'center',
            alignItems: 'center'
        },
        title: {
            marginTop: scaleVertical(10),
            fontSize: scaleFontSize(18),
            color: colors.text,
            fontFamily: 'Roboto-Regular',
        },
        text: {
            marginTop: scaleVertical(10),
            fontSize: scaleFontSize(14),
            color: colors.text,
            fontFamily: 'Roboto-Regular',
        },
        optionsButton: {
            position: 'absolute',
            top: scaleVertical(10),
            right: scaleHorizontal(15),
        },
    });
    return styles;
};