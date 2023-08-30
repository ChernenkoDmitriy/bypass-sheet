import { StyleSheet } from 'react-native';
import { IColors } from '../../../UIProvider/colors/IColorsController';

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: colors.background,
        },
        textWrapper: {
            marginHorizontal: 20,
            marginTop: 20,
        },
        instruction: {
            fontSize: 14,
            color: colors.regularText,
        },
    });
    return styles;
}
