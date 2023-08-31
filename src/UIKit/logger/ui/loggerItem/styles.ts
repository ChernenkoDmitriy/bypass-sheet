import { StyleSheet } from 'react-native';
import { IColors } from '../../../../UIProvider/theme/IColors';
import { scaleHorizontal, scaleVertical } from '../../../../utils/Utils';

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            marginVertical: scaleVertical(10),
            marginHorizontal: scaleHorizontal(10),
            borderRadius: 8,
            backgroundColor: colors.background,
        },
        button: {
            justifyContent: 'center',
            padding: 5,
        },
        name: {
            fontSize: 16,
            color: colors.text
        },
        text: {
            flex: 1,
            color: colors.text,
            textAlign: 'justify',
            marginHorizontal: 10,
        }
    });
    return styles;
}
