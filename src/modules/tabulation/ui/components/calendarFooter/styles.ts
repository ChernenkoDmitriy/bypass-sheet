import { StyleSheet } from 'react-native';
import { IColors } from '../../../../../UIProvider/colors/IColorsController';
import { scaleHorizontal, scaleVertical } from '../../../../../utils/Utils';

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            height: scaleVertical(130),
            width: '100%',
            position: 'absolute',
            bottom: 0,
            alignItems: 'center',
            borderTopColor: colors.background,
            borderTopWidth: 1,
            backgroundColor: colors.background,
            paddingTop: scaleVertical(20)
        },
        compareButton: {
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: scaleVertical(18)
        },
        compareText: {
            fontFamily: 'Roboto-Regular',
            color: colors.text,
            fontWeight: '700',
            marginRight: scaleHorizontal(5),
        },
        buttonsWrapper: {
            width: '100%',
            paddingHorizontal: scaleHorizontal(20),
            flexDirection: 'row',
            justifyContent: 'space-between'
        },
        cancelButton: {
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: scaleHorizontal(30)
        },
        cancelText: {
            fontFamily: 'Roboto-Regular',
            color: colors.primary,
        },
        saveButton: {
            width: scaleHorizontal(200),
            height: scaleVertical(45),
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 100,
        },
        saveText: {
            fontFamily: 'Roboto-Regular',
            color: colors.buttonText
        }
    });
    return styles;
};