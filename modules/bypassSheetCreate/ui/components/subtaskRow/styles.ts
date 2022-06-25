import { StyleSheet } from 'react-native';
import { IColors } from '../../../../../src/UIProvider/colors/IColorsController';

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            backgroundColor: colors.card,
            borderRadius: 4,
            marginHorizontal: 10,
            marginVertical: 10,
        },
        topContainer: {
            height: 50,
            alignItems: 'center',
            flexDirection: 'row',
        },
        buttonText: {
            padding: 10,
            alignSelf: 'flex-start',
        },
        addSubtaskText: {
            fontSize: 14,
            lineHeight: 18,
            color: colors.accentColorDark,
            fontFamily: 'Roboto-Regular'
        },
        inputWrapper: {
            flex: 1,
            justifyContent: 'center',
        },
        input: {
            flex: 1,
            height: 50,
            borderBottomWidth: 0,

        },
        sideContainer: {
            height: 50,
            width: 50,
            justifyContent: 'center',
            alignItems: 'center',
        },
    });
    return styles;
};