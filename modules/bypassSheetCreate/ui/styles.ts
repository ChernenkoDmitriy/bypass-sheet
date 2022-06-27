import { StyleSheet } from 'react-native';
import { IColors } from '../../../src/UIProvider/colors/IColorsController';

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: colors.background,
        },
        scroll: {
            flexGrow: 1,
        },
        contentContainerStyle: {
            paddingBottom: 70,
        },
        button: {
            backgroundColor: colors.accentColorLight,
            marginVertical: 10,
            width: '90%',
            alignSelf: 'center',
        }
    });
    return styles;
}
