import { StyleSheet } from 'react-native';
import { IColors } from '../../../src/UIProvider/colors/IColorsController';
import { scaleVertical } from '../../../src/utils/Utils';

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        logo: {
            marginLeft: scaleVertical(10),
            width: scaleVertical(76),
            height: scaleVertical(36),
        }
    });
    return styles;
}
