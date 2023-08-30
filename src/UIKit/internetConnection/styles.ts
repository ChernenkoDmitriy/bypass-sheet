import { StyleSheet } from 'react-native';
import { scaleFontSize, scaleHorizontal, scaleVertical, size } from '../../utils/Utils';
import { IColors } from '../../UIProvider/colors/IColorsController';

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            width: size.width,
            height: size.height,
            position: 'absolute',
        },
        contentWrapper: {
            flex: 1,
            alignItems: 'center',
            justifyContent:'center',
            paddingHorizontal:scaleHorizontal(30),
        },
        backgroundImage: {
            width: '100%',
            height: '100%',
            position: 'absolute',
        },
        image: {
            width: scaleHorizontal(200),
            height: scaleVertical(150),
        },
        title: {
            fontFamily: 'Roboto-Regular',
            fontSize: scaleFontSize(25),
            color: colors.text,
            marginBottom: scaleVertical(50),
        },
        containerButton:{
            width:'100%'
        }
    });
    return styles;
};