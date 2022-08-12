import { StyleSheet } from 'react-native';
import { IColors } from '../../../../../src/UIProvider/colors/IColorsController';

export const getStyle = (_colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            width: '100%',
            height: 80,
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 12,
        },
        iconWrapper: {
            width: 44,
            height: 44,
            justifyContent: 'center',
            alignItems: 'center'
        },
    });
    return styles;
}
