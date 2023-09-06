import { StyleSheet } from "react-native";
import { IColors } from "../../../../UIProvider/colors/IColorsController";
import { scaleFontSize, scaleHorizontal, scaleVertical } from "../../../../utils/Utils";

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent:'center'
        },
        buttonWrapper: {
            flexDirection: 'row',
            justifyContent:'space-between'
        },
        title:{
            fontSize:scaleFontSize(22),
            color:colors.text,
            fontFamily:'Roboto-Regular',
            textAlign:'center',
            paddingVertical:scaleVertical(25),
        },
    });
    return styles;
};