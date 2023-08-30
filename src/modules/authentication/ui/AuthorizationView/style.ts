import { StyleSheet } from "react-native";
import { IColors } from "../../../../UIProvider/colors/IColorsController";
import { scaleFontSize, scaleHorizontal, scaleVertical } from "../../../../utils/Utils";

export const getStyle = (colors: IColors, isValid: boolean, isValidPassword: boolean) => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            paddingHorizontal: scaleHorizontal(25),
        },
        title: {
            fontSize: scaleFontSize(20),
            color: colors.text,
            fontFamily: 'Roboto-Regular',
            alignSelf: 'center',
            marginTop: scaleVertical(20)
        },
        logo: {
            width: scaleVertical(220),
            height: scaleVertical(220),
            alignSelf: 'center',
            marginVertical: scaleVertical(70)
        },
        button: {
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
        },
        text: {
            fontSize: scaleFontSize(14),
            color: colors.primary,
            fontFamily: 'Roboto-Regular'
        },
        buttonWrapper: {
            marginTop: scaleVertical(20)
        },
        buttonRegistered: {
            marginTop:scaleVertical(50),
            justifyContent:'center',
            alignItems:'center'
        },
    });
    return styles;
};