import { StyleSheet } from 'react-native';
import { IColors } from '../../../../UIProvider/colors/IColorsController';

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            backgroundColor: colors.accentColorLight,
            width: 55,
            height: 55,
            borderRadius: 50,
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            bottom: 80,
            right: 20,
            shadowOpacity: 0.5,
            shadowRadius: 3,
            shadowOffset: { height: 0, width: 0 },
            shadowColor: colors.titleText,
            elevation: 7,
        },
        text: {
            color: '#FFFFFF',
            fontSize: 40,
            lineHeight: 50,
        },
    });
    return styles;
}
