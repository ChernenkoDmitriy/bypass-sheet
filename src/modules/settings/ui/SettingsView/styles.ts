import { StyleSheet } from 'react-native';
import { IColors } from '../../../../UIProvider/colors/IColorsController';
import { scaleHorizontal, scaleVertical } from '../../../../utils/Utils';

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
        },
        button:{
            marginVertical:scaleVertical(10),
        }
    });
    return styles;
};