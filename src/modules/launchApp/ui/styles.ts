import { StyleSheet } from 'react-native';
import { IColors } from '../../../UIProvider/colors/IColorsController';
import { scaleHorizontal } from '../../../utils/Utils';

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
        },
        logo: {
            width: scaleHorizontal(250),
            height: scaleHorizontal(250),
        },
    });
    return styles;
}
