import { StyleSheet } from 'react-native';
import { scaleHorizontal, scaleFontSize, scaleVertical, isIOS } from '../../utils/Utils';
import { IColors } from '../../UIProvider/colors/IColorsController';

export const getStyle = (colors: IColors, isValid: boolean) => {
    const styles = StyleSheet.create({
        container: {
        },
        inputTitle: {
            fontSize: scaleFontSize(14),
            color: colors.text,
            marginBottom: scaleVertical(8),
        },
        inputWrapper: {
            flexDirection: 'row',
            alignItems: isIOS ? 'center' : undefined,
            justifyContent: 'center',
            width: '100%',
            borderWidth: 0.5,
            height: scaleVertical(50),
            borderColor: isValid ? colors.icon : colors.error,
            borderRadius: 20,
            paddingLeft: scaleHorizontal(15),
            paddingRight: scaleHorizontal(18),
        },
        prefixText: {
            textAlignVertical: 'center',
            fontSize: scaleFontSize(16),
            overflow: 'visible',
            color: colors.accentText,
        },
        input: {
            flex: 1,
            fontSize: scaleFontSize(16),
            padding: 0,
            color: colors.accentText,
        },
        errorText: {
            fontSize: scaleFontSize(11),
            alignSelf: 'flex-end',
            marginRight: scaleHorizontal(10),
            marginTop: scaleVertical(4),
            color: colors.error,
        },
    });
    return styles;
};