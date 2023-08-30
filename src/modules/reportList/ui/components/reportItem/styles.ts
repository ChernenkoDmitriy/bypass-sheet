import { StyleSheet } from 'react-native';
import { IColors } from '../../../../../UIProvider/colors/IColorsController';

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            marginVertical: 12,
            marginHorizontal: 16,
            padding: 16,
            backgroundColor: colors.card,
            borderRadius: 8,
        },
        titleWrapper: {
            flex: 1,
        },
        title: {
            fontFamily: 'Roboto-Bold',
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
            backgroundColor: colors.lightButton,
            marginHorizontal: 0,
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
            marginTop: 12,
        },
        textButton: {

        },

    });
    return styles;
};