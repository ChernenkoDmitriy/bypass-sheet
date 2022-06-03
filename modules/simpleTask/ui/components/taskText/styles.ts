import { StyleSheet } from 'react-native';
import { IColors } from '../../../../../src/colorTheme';
import { Utils } from '../../../../../src/utils/Utils';

export const getStyle = (colors: IColors, isDone: boolean) => {
    const styles = StyleSheet.create({
        container: {
            backgroundColor: colors.background,
            width: '100%',
            flexDirection: 'row',
        },
        checkboxContainer: {
            height: 44,
            width: 44,
            alignItems: 'center',
            justifyContent: 'center',
        },
        inputContainer: {
            flex: 1,
        },
        input: {
            textDecorationLine: isDone ? 'line-through' : 'none',
            width: '100%',
            color: colors.titleText,
            fontSize: 18,
            lineHeight: 24,
            marginTop: Utils.isIOS ? 4 : 0,
        }
    });
    return styles;
}
