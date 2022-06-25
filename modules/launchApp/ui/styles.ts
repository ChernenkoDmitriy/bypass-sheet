import { StyleSheet } from 'react-native';
import { IColors } from '../../../src/UIProvider/colors/IColorsController';

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: colors.background,
            justifyContent: 'center',
            alignItems: 'center',
        },
        text: {
            fontSize: 22,
            lineHeight: 26,
            fontWeight: '500',
            color: colors.titleText,
            alignSelf: 'center',
        },
    });
    return styles;
}
