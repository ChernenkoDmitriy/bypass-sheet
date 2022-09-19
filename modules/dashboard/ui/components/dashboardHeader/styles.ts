import { StyleSheet } from 'react-native';
import { IColors } from '../../../../../src/UIProvider/colors/IColorsController';
import { scaleVertical } from '../../../../../src/utils/Utils';

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            flex: 1,
        },
        logo: {
            marginLeft: scaleVertical(10),
            width: scaleVertical(48),
            height: scaleVertical(48),
        },
        button: {
            width: 48,
            justifyContent: 'center',
            alignItems: 'center',
        },
        avatar: {
            width: scaleVertical(32),
            height: scaleVertical(32),
            borderRadius: 50
        },
    });
    return styles;
};