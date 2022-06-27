import { StyleSheet } from 'react-native';
import { IColors } from '../../../../../src/UIProvider/colors/IColorsController';
import { size } from '../../../../../src/utils/Utils';

const width = size.width;
const ITEM_WIDTH = (width / 2) < 175 ? '40%' : 170;

export const getStyle = (colors: IColors, isChosen: boolean) => {
    const styles = StyleSheet.create({
        container: {
            width: ITEM_WIDTH,
            height: 230,
            justifyContent: 'space-between',
        },
        contentBorder: {
            display: 'flex',
            width: ITEM_WIDTH,
            height: 200,
            padding: 4,
            borderWidth: 2,
            borderRadius: 12,
            borderColor: isChosen ? colors.accentText : colors.background,
        },
        contentContainer: {
            flex: 1,
            borderRadius: 12,
            backgroundColor: 'gray',
        },
        title: {
            alignSelf: 'center',
            fontSize: 14,
            lineHeight: 22,
            fontWeight: '500',
            color: isChosen ? colors.accentText : colors.titleText,
        },
    });
    return styles;
}
