import { StyleSheet } from 'react-native';
import { IColors } from '../../../../../src/UIProvider/colors/IColorsController';

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            padding: 10,
            borderRadius: 4,
            marginVertical: 10,
            backgroundColor: colors.card,
            elevation: 1,
            flexDirection: 'row',
            alignItems:'center'
        },
        textWrapper: {
            flex: 1,
        },
        title: {
            fontSize: 16,
            lineHeight: 20,
            color: colors.titleText,
            fontFamily: 'Roboto-Regular'
        },
        button: {
            width: 40,
            height: 40,
            justifyContent: 'center',
            alignItems: 'center',
        }
    });
    return styles;
};