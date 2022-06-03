import { StyleSheet } from 'react-native';
import { IColors } from '../../../../src/colorTheme';

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            flexGrow: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },
        button: {
            width: 200,
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: colors.accentColorLight
        },
        title: {
            color: colors.buttonText,
        },
    });
    return styles;
};