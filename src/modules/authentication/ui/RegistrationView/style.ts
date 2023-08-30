import { StyleSheet } from "react-native";
import { scaleFontSize, scaleHorizontal, scaleVertical } from "../../../../utils/Utils";
import { IColors } from "../../../../UIProvider/colors/IColorsController";

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            paddingHorizontal: scaleHorizontal(25)
        },
        title: {
            fontSize: scaleFontSize(22),
            color: colors.text,
            fontWeight: '600',
            textAlign: "center",
            marginTop: scaleVertical(20)
        },
        text: {
            fontSize: scaleFontSize(16),
            color: colors.subText,
            fontFamily:'Roboto-Regular',
            textAlign: "center",
            marginTop: scaleVertical(10)
        },
        titleStyle: {
            marginBottom: 0,
            marginTop: scaleVertical(40),
            fontFamily:'Roboto-Regular'
        },
        button: {
            marginTop: scaleVertical(40)
        },
        policyText: {
            fontSize: scaleFontSize(12),
            color: colors.text,
            fontFamily:'Roboto-Regular',
            textAlign: "center",
            marginTop: scaleVertical(20)
        }
    });
    return styles;
};