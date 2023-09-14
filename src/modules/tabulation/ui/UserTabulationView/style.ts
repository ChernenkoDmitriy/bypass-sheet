import { StyleSheet } from "react-native";
import { IColors } from "../../../../UIProvider/colors/IColorsController";
import { scaleFontSize, scaleHorizontal, scaleVertical } from "../../../../utils/Utils";

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
        },
        buttonWrapper: {
            flex:1,
            justifyContent:'flex-end',
            marginBottom:scaleVertical(30)
        },
        title:{
            fontSize:scaleFontSize(22),
            color:colors.text,
            fontFamily:'Roboto-Regular',
            textAlign:'center',
            paddingVertical:scaleVertical(25),
        },
        text:{
            color:colors.text,
            fontSize:scaleFontSize(12),
            textAlign:'center',
            marginTop:scaleVertical(15)
        },
        buttonText:{
            fontSize:scaleFontSize(18),
            color:colors.primary,
            textAlign:'center',
            marginTop:scaleVertical(10)
        }
    });
    return styles;
};