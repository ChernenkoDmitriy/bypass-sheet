import { StyleSheet } from 'react-native';
import { IColors } from '../../../../../src/UIProvider/colors/IColorsController';

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            marginTop: 16,
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
            flexWrap: 'wrap',
        },
        photoContainer: {
            margin: 8,
            height: 40,
            width: 40,
            borderRadius: 4,
            justifyContent: 'center',
        },
        photo: {
            width: 40,
            height: 40,
            borderRadius: 4,
        },
        deleteButton: {
            position: 'absolute',
            right: -12,
            top: -12,
        }
    });
    return styles;
};