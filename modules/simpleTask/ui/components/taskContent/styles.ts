import { StyleSheet } from 'react-native';
import { IColors } from '../../../../../src/colorTheme';

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            width: '100%',
            paddingHorizontal: 18,
        },
    });
    return styles;
}
