import { StyleSheet } from "react-native";
import { IColors } from "../../../../UIProvider/colors/IColorsController";
import { scaleFontSize, scaleHorizontal, scaleVertical } from "../../../../utils/Utils";

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
        },
        buttonWrapper:{
            width:'100%',
            paddingHorizontal:scaleHorizontal(30),
            position:'absolute',
            bottom:20,
        }
    });
    return styles;
};