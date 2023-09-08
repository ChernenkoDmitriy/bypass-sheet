import { StyleSheet } from "react-native";
import { IColors } from "../../../../../UIProvider/colors/IColorsController";
import { scaleFontSize, scaleHorizontal, scaleVertical } from "../../../../../utils/Utils";

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            marginTop: scaleVertical(10),
            width: '100%',
            height: scaleVertical(155),
            borderRadius: 9,
            backgroundColor: colors.card,
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 3,
            },
            shadowOpacity: 0.23,
            shadowRadius: 2.62,
            elevation: 4,
        },
        informationWrapper: {
            width: '100%',
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
        textButton:{
            fontSize: scaleFontSize(14),
            color: colors.text,
            fontFamily: 'Roboto-Regular'
        },
        inviteWrapper:{
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'space-between',
        },
        inviteButton:{
            padding:7,
            borderWidth:0.5,
            borderRadius:20,
            borderColor:colors.modalBackground,
            marginRight:scaleHorizontal(8)
        },
        buttonWrapper:{
            flexDirection:'row',
            paddingRight:scaleHorizontal(10)
        }
    });
    return styles;
};