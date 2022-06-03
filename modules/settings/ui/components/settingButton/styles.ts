import { StyleSheet } from 'react-native';
import { IColors } from '../../../../../src/colorTheme';
import { Utils } from '../../../../../src/utils/Utils';

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            marginTop: 16,
            width: '100%',
            height: 60,
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 22,
        },
        textContainer: {
            flex: 1,
        },
        title: {
            fontSize: 18,
            lineHeight: 22,
            fontWeight: '500',
            color: colors.titleText,
        },
        description: {
            fontSize: 14,
            lineHeight: 18,
            color: colors.regularText,
        }
    });
    return styles;
}
