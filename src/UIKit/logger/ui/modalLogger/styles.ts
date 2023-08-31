import { StyleSheet } from 'react-native';
import { IColors } from '../../../../UIProvider/theme/IColors';
import { scaleFontSize, scaleHorizontal, scaleVertical } from '../../../../utils/Utils';

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: colors.card,
        },
        header: {
            height: scaleVertical(50),
            width: '100%',
            backgroundColor: colors.card,
            paddingRight: scaleHorizontal(20),
            shadowColor: colors.background,
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.1,
            elevation: 4,
            zIndex: 2,
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'flex-end',
        },
        button: {
            height: scaleVertical(50),
            paddingHorizontal: scaleHorizontal(30),
            justifyContent: 'center',
            alignItems: 'center',
        },
        buttonText: {
            fontSize: scaleFontSize(18),
            fontWeight: '500',
            color: colors.primary,
        }
    });
    return styles;
}
