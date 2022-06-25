import { StyleSheet } from 'react-native';
import { IColors } from '../../../../../src/UIProvider/colors/IColorsController';

export const getStyle = (_colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            height: 24,
            width: 28,
            justifyContent: 'center',
            alignItems: 'center'
        }
    });
    return styles;
};