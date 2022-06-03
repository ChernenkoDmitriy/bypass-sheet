import { StyleSheet } from 'react-native';
import { IColors } from '../../../../../src/UIProvider/colors/IColorsController';
import { Utils } from '../../../../../src/utils/Utils';

export const getStyle = (_colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            flexDirection: 'row',
            height: Utils.scaleHorizontal(35) ,
        },
        button: {
            width: Utils.scaleHorizontal(35),
            height: Utils.scaleHorizontal(35),
            justifyContent: 'center',
            alignItems: 'center',
        },
    });
    return styles;
};