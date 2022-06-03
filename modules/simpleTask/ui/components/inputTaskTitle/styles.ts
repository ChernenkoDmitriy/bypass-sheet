import { StyleSheet } from 'react-native';
import { IColors } from '../../../../../src/colorTheme';

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            backgroundColor: colors.background,
            width: '100%',
            paddingHorizontal: 18,
            marginTop: 12,
        },
        input: {
            width: '100%',
            color: colors.titleText,
            fontSize: 24,
        }
    });
    return styles;
}
