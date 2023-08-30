import { StyleSheet } from 'react-native';
import { IColors } from '../../../../../UIProvider/colors/IColorsController';
 
export const getStyle = (colors: IColors, isChosen: boolean) => {
    const styles = StyleSheet.create({
        container: {
            width: '100%',
            height: 60,
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 22,
            backgroundColor: isChosen ? colors.accentColorLight + '66' : colors.background,
        },
        textContainer: {
            flex: 1,
        },
        title: {
            fontSize: 18,
            lineHeight: 22,
            fontWeight: '500',
            color: isChosen ? colors.accentText : colors.titleText,
        },
    });
    return styles;
}
