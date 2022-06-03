import { StyleSheet } from 'react-native';
import { IColors } from '../../../../../src/UIProvider/colors/IColorsController';

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            marginVertical: 10,
            marginHorizontal: 10,
            backgroundColor: colors.card,
            borderRadius: 8,
        },
        titleWrapper: {
            flex: 1,
        },
        title: {
            fontSize: 16,
            color: colors.titleText,
        },
        inputWrapper: {
            flex: 1,
        },
        input: {
            textAlignVertical: 'top',
            borderBottomWidth: 0,
            height: 120,
            backgroundColor: colors.shadow,
            borderRadius: 8,
        },
        sideContainer: {
            marginVertical: 5,
            borderLeftWidth: 1,
            borderLeftColor: colors.shadow,
            width: 70,
            justifyContent: 'center',
            alignItems: 'center',
        },
        contentWrapper: {
            padding: 10,
            flex: 1,
        },
        footer: {
            flexDirection: 'row',
            alignItems: 'center'
        },
        commentButton: {
            flex: 1,
            height: 40,
            justifyContent: 'center',
        },
        commentContainer: {
            padding: 10,
        },
        textButton: {

        },

    });
    return styles;
};