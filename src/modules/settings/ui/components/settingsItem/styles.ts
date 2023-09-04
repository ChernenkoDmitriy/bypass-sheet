import { StyleSheet } from 'react-native';
import { IColors } from '../../../../../UIProvider/colors/IColorsController';
import { scaleFontSize, scaleHorizontal, scaleVertical } from '../../../../../utils/Utils';

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            width: '100%',
            height: scaleVertical(60),
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: scaleHorizontal(10),
            justifyContent:'space-between'
        },
        title: {
            fontSize: scaleFontSize(18),
            fontFamily: 'Roboto-Regular',
            color: colors.text,
            marginLeft: scaleHorizontal(25),
            marginRight: scaleHorizontal(10)
        },
        text: {
            fontSize: scaleFontSize(16),
            color: colors.text,
            marginRight: scaleHorizontal(10)
        },
        switchWrapper: {
            flexDirection: 'row',
            alignItems: 'center',
        },
        languageWrapper:{
            flexDirection:'row',
            alignItems:'center'
        }
    });
    return styles;
};