import { StyleSheet } from 'react-native';
import { scaleHorizontal } from '../../utils/Utils';
import { IColors } from '../../UIProvider/colors/IColorsController';

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor:colors.background,
        },
        contentContainerStyle: {
            flexGrow: 1,
            backgroundColor:colors.background,
            paddingHorizontal:scaleHorizontal(15)
        },
        default:{
            flex:1,
            backgroundColor:colors.primary
        },
    });
    return styles;
};