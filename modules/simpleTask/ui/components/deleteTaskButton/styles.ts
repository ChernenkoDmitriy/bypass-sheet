import { StyleSheet } from 'react-native';
import { IColors } from '../../../../../src/colorTheme';

export const getStyle = (_colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            width: 40,
            marginLeft: 20,
            alignItems: 'center',
            justifyContent: 'center',
        },

    });
    return styles;
}
