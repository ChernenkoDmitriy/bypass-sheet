import { StyleSheet } from 'react-native';
import { IColors } from '../../../../../src/UIProvider/colors/IColorsController';

export const getStyle = (_colors: IColors) => {
    const styles = StyleSheet.create({
        contentContainerStyle: {
            paddingBottom: 10,
            flexGrow: 1,
        }
    });
    return styles;
}
