import { StyleSheet } from 'react-native';
import { IColors } from '../../../../../src/colorTheme';

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        modal: {
            flex: 1,
            justifyContent: 'flex-end',
            margin: 0,
        },
        container: {
            paddingTop: 16,
            backgroundColor: colors.background,
            height: '90%',
            width: '100%',
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
        },
        title: {
            marginVertical: 8,
            fontSize: 18,
            lineHeight: 22,
            fontWeight: '500',
            color: colors.titleText,
            alignSelf: 'center',
        },
        themeButtonsContainer: {
            marginTop: 16,
            flexWrap: 'wrap',
            flexDirection: 'row',
            justifyContent: 'space-around'
        },
    });
    return styles;
}
