import { StyleSheet } from 'react-native';
import { IColors } from '../../../../../src/UIProvider/colors/IColorsController';

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            flexDirection: 'row',
            paddingHorizontal: 22,
        },
        avatar: {
            backgroundColor: colors.background,
            height: 50,
            width: 50,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 50,
        },
        userInfoContainer: {
            flex: 1,
            marginLeft: 12,
            justifyContent: 'center'
        },
        userNameText: {
            fontSize: 16,
            lineHeight: 20,
            fontWeight: '500',
            color: colors.titleText
        },
        userEmailText: {
            marginTop: 2,
            fontSize: 12,
            lineHeight: 16,
            color: colors.regularText
        },
    });
    return styles;
}
