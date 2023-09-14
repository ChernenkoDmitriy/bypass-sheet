import { StyleSheet } from 'react-native';
import { scaleFontSize, scaleHorizontal, scaleVertical } from '../../../../../utils/Utils';
import { IColors } from '../../../../../UIProvider/colors/IColorsController';

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            marginHorizontal: scaleHorizontal(20),
            marginBottom: scaleVertical(17),
            borderRadius: 16,
            flexDirection: 'row',
            justifyContent:'space-between',
            alignItems:'center',
            marginTop:scaleVertical(35)
        },
        title:{
            fontSize: scaleFontSize(14),
            color: colors.text,
        },
        text: {
            fontSize: scaleFontSize(12),
            color: colors.text
        }
    });
    return styles;
}; 