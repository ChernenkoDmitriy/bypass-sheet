import { StyleSheet } from 'react-native';
import { IColors } from '../../../../../src/UIProvider/colors/IColorsController';

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        contentContainerStyle: {
            paddingBottom: 10,
        }
    });
    return styles;
}
