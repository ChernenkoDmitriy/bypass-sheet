import { StyleSheet } from 'react-native';
import { IColors } from '../../../../../src/UIProvider/colors/IColorsController';

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            marginVertical: 10,
            height: 50,
            alignItems: 'center',
            marginHorizontal: 10,
            flexDirection: 'row',
        },
        sortNumber: {
            fontSize: 22,
            color: colors.titleText,
        },
        inputWrapper: {
            flex: 1,
            justifyContent: 'center',
        },
        input: {
            flex: 1,
            height: 50,
            borderBottomWidth: 0
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