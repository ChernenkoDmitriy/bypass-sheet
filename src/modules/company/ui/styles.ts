import { StyleSheet } from 'react-native';
import { IColors } from '../../../UIProvider/colors/IColorsController';

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        containerInput: {
            flex: 0,
            height: 50,
            borderBottomWidth: 0,
            margin: 10,
            marginTop:10,
        },
    });
    return styles;
}
