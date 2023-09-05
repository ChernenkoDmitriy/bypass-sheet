import { StyleSheet } from "react-native";
import { IColors } from "../../../../../UIProvider/colors/IColorsController";
import { scaleFontSize, scaleHorizontal, scaleVertical } from "../../../../../utils/Utils";

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            marginTop: scaleVertical(10),
            width: '100%',
            borderRadius: 9,
            backgroundColor: colors.card,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal:scaleHorizontal(10)
        },
        informationWrapper: {
            flexDirection: 'row',
            paddingVertical: scaleVertical(25),
        },
        optionsButton: {
            position: 'absolute',
            top: 10,
            right: 15,
        },
        text: {
            fontSize: scaleFontSize(18),
            color: colors.text,
            fontFamily: 'Roboto-Regular',
            marginLeft: scaleHorizontal(10)
        },
    });
    return styles;
};