import { StyleSheet } from 'react-native';
import { IColors } from '../../../../UIProvider/theme/IColors';

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        button: {
            position: 'absolute',
            left: 20,
            bottom: 100,
        },
    });
    return styles;
}