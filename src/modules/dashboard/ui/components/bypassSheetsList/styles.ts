import { StyleSheet } from 'react-native';
import { IColors } from '../../../../../UIProvider/colors/IColorsController';

export const getStyle = (_colors: IColors) => {
    const styles = StyleSheet.create({
        contentContainerStyle: {
            paddingBottom: 10,
            flexGrow: 1,
        }
    });
    return styles;
}
