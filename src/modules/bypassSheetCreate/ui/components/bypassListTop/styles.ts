import { StyleSheet } from 'react-native';
import { IColors } from '../../../../../UIProvider/colors/IColorsController';

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            marginHorizontal: 16,
        },
        title: {
            marginVertical: 16,
            fontSize: 14,
            lineHeight: 18,
            color: colors.regularText,
            fontFamily: 'Roboto-Bold',
        },
        contentContainer: {
            backgroundColor: colors.card,
            borderRadius: 8,
            padding: 12,
            paddingVertical: 16,
        },
        description: {
            fontSize: 14,
            lineHeight: 18,
            color: colors.titleText,
            fontFamily: 'Roboto-Regular'
        },
        containerInput: {
            flex: 0,
            height: 44,
            minHeight: 44,
            borderBottomWidth: 0,
            borderRadius: 4,
            marginVertical: 10,
            backgroundColor: colors.background,
        },
    });
    return styles;
};