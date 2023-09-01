import { StyleSheet } from 'react-native';
import { IColors } from '../../../../../UIProvider/colors/IColorsController';
import { scaleFontSize, scaleVertical } from '../../../../../utils/Utils';

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            flex: 1,
        },
        logo: {
            marginLeft: scaleVertical(10),
            width: scaleVertical(48),
            height: scaleVertical(48),
        },
        logoWrapper: {
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
        },
        appName: {
            fontSize: 20,
            color: colors.titleText,
            fontFamily: 'Roboto-Bold',
            marginLeft: 6,
        },
        button: {
            width: 48,
            justifyContent: 'center',
            alignItems: 'center',
        },
        avatar: {
            width: scaleVertical(32),
            height: scaleVertical(32),
            borderRadius: 50
        },
        createButton: {
            paddingVertical: scaleVertical(10)
        },
        text: {
            fontSize: scaleFontSize(14),
            fontFamily: 'Roboto-Regular',
            color: colors.text,
        }
    });
    return styles;
};