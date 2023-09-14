import { StyleSheet } from 'react-native';
import { IColors } from '../../../../UIProvider/colors/IColorsController';
import { scaleFontSize, scaleHorizontal, scaleVertical } from '../../../../utils/Utils';

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            paddingHorizontal:scaleHorizontal(16)
        },
        button:{
            marginVertical:scaleVertical(10),
        },
        buttonWrapper:{
            marginVertical:scaleVertical(30),
            // paddingHorizontal:scaleHorizontal(40)
        },
        buttonText:{
            fontSize:scaleFontSize(18),
            color:colors.primary,
            textAlign:'center'
        }
    });
    return styles;
};