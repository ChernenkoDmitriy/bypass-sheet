import { StyleSheet } from "react-native";
import { IColors } from "../../../../../UIProvider/colors/IColorsController";
import { scaleFontSize, scaleHorizontal, scaleVertical } from "../../../../../utils/Utils";

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            marginTop: scaleVertical(10),
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between'
        },
        informationWrapper: {
            flexDirection: 'row'
        },
        titleWrapper:{
            marginLeft:scaleHorizontal(5),
            borderBottomWidth:0.5,
            borderBottomColor:colors.card,
            flex:1
        },
        text: {
            fontSize: scaleFontSize(16),
            color: colors.text,
            fontFamily: 'Roboto-Regular',
            marginLeft:scaleHorizontal(8),
        },
        button:{
            justifyContent:'center'
        }
    });
    return styles;
};