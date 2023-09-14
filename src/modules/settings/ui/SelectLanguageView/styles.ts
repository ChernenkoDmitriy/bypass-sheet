import { StyleSheet } from 'react-native';
import { IColors } from '../../../../UIProvider/colors/IColorsController';
import { scaleHorizontal } from '../../../../utils/Utils';

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            paddingHorizontal:scaleHorizontal(15)
        },
    });
    return styles;
};