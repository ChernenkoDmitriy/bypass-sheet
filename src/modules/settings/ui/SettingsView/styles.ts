import { StyleSheet } from 'react-native';
import { IColors } from '../../../../UIProvider/colors/IColorsController';
import { scaleHorizontal, scaleVertical } from '../../../../utils/Utils';

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
        },
        button:{
            marginVertical:scaleVertical(10),
        },
        buttonWrapper:{
            marginVertical:scaleVertical(30),
            paddingHorizontal:scaleHorizontal(40)
        }
    });
    return styles;
};