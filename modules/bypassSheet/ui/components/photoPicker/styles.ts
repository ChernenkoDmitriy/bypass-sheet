import { StyleSheet } from 'react-native';
import { IColors } from '../../../../../src/UIProvider/colors/IColorsController';

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            marginTop: 10,
            flexDirection: 'row',
        },
        buttonAddPhoto: {
            height: 40,
            borderRadius: 8,
            justifyContent: 'center',
        },
        textButton: {
            color: colors.titleText,
        },
        photoWrapper: {
            flexDirection: 'row',
        },
        buttonPhoto: {
            marginHorizontal: 5,
            height: 40,
            width: 40,
            borderRadius: 8,
            justifyContent: 'center',
            overflow: 'hidden',
        },
        photo: {
            width: 40,
            height: 40,
            borderRadius: 8,
        }
    });
    return styles;
};