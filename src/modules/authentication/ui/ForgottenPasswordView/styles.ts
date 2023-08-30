import { StyleSheet } from 'react-native';
import { scaleFontSize, scaleHorizontal, scaleVertical } from '../../../../utils/Utils';
import { IColors } from '../../../../UIProvider/colors/IColorsController';

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            marginHorizontal: scaleHorizontal(25),
        },
        inputContainer:{
            marginTop:scaleVertical(40),
        }
    });
    return styles;
};