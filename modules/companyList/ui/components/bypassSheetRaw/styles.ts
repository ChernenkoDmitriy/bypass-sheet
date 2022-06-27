import { StyleSheet } from 'react-native';
import { IColors } from '../../../../../src/UIProvider/colors/IColorsController';

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            padding: 20,
            marginHorizontal: 10,
            borderRadius: 10,
            marginTop: 10,
            backgroundColor: colors.card,
            elevation: 2,
            flexDirection: 'row',
        },
        editButton: {
            height: 24,
            width: 24,
            justifyContent: 'center',
            alignItems: 'center',
        },
        title: {
            fontSize: 16,
            lineHeight: 20,
            color: colors.titleText,
            fontFamily: 'Roboto-Bold'
        },
        location: {
            flexDirection: 'row',
            marginTop: 8,
        },
        titleWrapper: {
            flex: 1,
            marginRight: 10,
        },
        address: {
            marginTop: 4,
            fontSize: 12,
            lineHeight: 16,
            color: colors.regularText,
            fontFamily: 'Roboto-Regular'
        },
    });
    return styles;
};