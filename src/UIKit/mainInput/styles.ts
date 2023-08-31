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
            fontFamily:'Roboto-Regular'
        },
        inputWrapper: {
            flexDirection: 'row',
            alignItems: isIOS ? 'center' : undefined,
            justifyContent: 'center',
            width: '100%',
            // borderWidth: 0.5,
            borderBottomWidth: 1,
            borderBottomColor: colors.primary,
            height: scaleVertical(50),
            // borderColor: isValid ? colors.icon : colors.error,
            // borderRadius: 20,
            paddingLeft: scaleHorizontal(3),
            paddingRight: scaleHorizontal(18),
        },
        prefixText: {
            textAlignVertical: 'center',
            fontSize: scaleFontSize(16),
            fontFamily:'Roboto-Regular',
            overflow: 'visible',
            color: colors.text,
        },
        input: {
            flex: 1,
            fontSize: scaleFontSize(16),
            fontFamily:'Roboto-Regular',
            padding: 0,
            color: colors.text,
        },
        errorText: {
            fontSize: scaleFontSize(11),
            alignSelf: 'flex-end',
            marginRight: scaleHorizontal(10),
            marginTop: scaleVertical(4),
            color: colors.error,
            fontFamily:'Roboto-Regular'
        },
        eyeIcon: {
            height: '100%',
            justifyContent: 'center',
        },
    });
    return styles;
};