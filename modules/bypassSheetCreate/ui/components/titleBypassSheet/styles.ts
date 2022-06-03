import { StyleSheet } from 'react-native';
import { IColors } from '../../../../../src/UIProvider/colors/IColorsController';

export const getStyle = (_colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            marginVertical: 10,
            height: 50,
            alignItems: 'center',
            marginHorizontal: 10,
            flexDirection: 'row',
        },
        input: {
            lex: 1,
            height: 50,
            borderBottomWidth: 0
        },
    });
    return styles;
};