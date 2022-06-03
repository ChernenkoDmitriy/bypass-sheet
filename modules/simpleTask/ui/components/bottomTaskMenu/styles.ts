import { StyleSheet } from 'react-native';
import { IColors } from '../../../../../src/colorTheme';

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            flexGrow: 1,
            alignItems: 'flex-end',
            justifyContent: 'flex-end',
        },
        contentContainer: {
            height: 50,
            width: '100%',
            borderTopColor: colors.shadow,
            borderTopWidth: 1,
            flexDirection: 'row',
            justifyContent: 'space-around',
        },
        buttonContainer: {
            height: 50,
            width: 50,
            justifyContent: 'center',
            alignItems: 'center',
        },
        checkBoxContainer: {
            justifyContent: 'center',
            alignItems: 'center',
            height: 26,
            width: 26,
            borderColor: colors.titleText,
            borderWidth: 1,
            borderRadius: 8,
        },
    });
    return styles;
}
