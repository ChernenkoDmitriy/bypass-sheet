import { StyleSheet } from 'react-native';
import { scaleFontSize, scaleHorizontal, scaleVertical, size } from '../../utils/Utils';
import { IColors } from '../../UIProvider/colors/IColorsController';

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            position: 'absolute',
            backgroundColor: colors.background,
            width: size.width,
            height: size.height,
            bottom: 0
        },
        contentWrapper: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            paddingHorizontal: scaleHorizontal(30),
        },
        backgroundImage: {
            width: '100%',
            height: '100%',
            position: 'absolute',
        },
        image: {
            width: scaleVertical(250),
            height: scaleVertical(200),
        },
        title: {
            fontFamily: 'Roboto-Regular',
            fontSize: scaleFontSize(25),
            color: colors.text,
            marginBottom: scaleVertical(50),
        },
        containerButton: {
            width: '100%'
        }
    });
    return styles;
};