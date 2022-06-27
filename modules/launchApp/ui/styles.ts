import { StyleSheet } from 'react-native';
import { IColors } from '../../../src/UIProvider/colors/IColorsController';
import { scaleHorizontal } from '../../../src/utils/Utils';

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
            height: scaleHorizontal(116),
        },
    });
    return styles;
}
