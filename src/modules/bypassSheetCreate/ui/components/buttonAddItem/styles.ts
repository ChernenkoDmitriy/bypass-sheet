import { StyleSheet } from 'react-native';
import { IColors } from '../../../../../UIProvider/colors/IColorsController';

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            flexDirection: 'row',
            alignItems: 'center',
            borderRadius: 4,
            minHeight: 48,
            justifyContent: 'center',
            width: '80%',
            alignSelf: 'center',
        },
        text: {
            fontSize: 18,
            lineHeight: 22,
            color: colors.regularText,
            fontWeight: 'bold',
            textAlign: 'center',
            marginRight: 20,
        },
    });
    return styles;
}
