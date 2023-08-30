import { StyleSheet } from 'react-native';
import { IColors } from '../../../UIProvider/colors/IColorsController';

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: colors.background,
        },
        buttonContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 16,
        },
        button: {
            backgroundColor: colors.accentColorLight,
            marginVertical: 10,
            width: '45%',
            alignSelf: 'center',
        }
    });
    return styles;
}
