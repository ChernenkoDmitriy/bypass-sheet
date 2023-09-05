import { StyleSheet } from 'react-native';
import { IColors } from '../../UIProvider/colors/IColorsController';
import { scaleVertical } from '../../utils/Utils';

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            zIndex: 1,
            height: scaleVertical(55),
            overflow: 'visible',
            marginTop:scaleVertical(10)
        },
        inputContainer: {
            height: scaleVertical(55),
            borderWidth: 1,
            borderColor: colors.primary,
            borderTopLeftRadius: 12,
            borderTopRightRadius: 12,
            borderBottomLeftRadius: 12,
            borderBottomRightRadius: 12,
            backgroundColor: colors.card,
            flexDirection: 'row',
            paddingRight: 14,
        },
        searchContainer: {
            justifyContent: 'center',
            alignItems: 'center',
            height: scaleVertical(55),
            width: scaleVertical(55),
        },
        input: {
            flex: 1,
            color: colors.text,
        },
        searchList: {
            backgroundColor: colors.card,
            borderBottomLeftRadius: 12,
            borderBottomRightRadius: 12,
            paddingHorizontal: 20,
            borderWidth: 1,
            borderTopWidth: 0,
            borderColor: colors.primary,
        },
    });
    return styles;
};
