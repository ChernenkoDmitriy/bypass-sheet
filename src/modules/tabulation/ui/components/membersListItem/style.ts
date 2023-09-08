import { StyleSheet } from "react-native";
import { IColors } from "../../../../../UIProvider/colors/IColorsController";
import { scaleFontSize, scaleHorizontal, scaleVertical } from "../../../../../utils/Utils";

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            marginTop: scaleVertical(10),
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between'
        },
        informationWrapper: {
            flexDirection: 'row'
        },
        titleWrapper: {
            marginLeft: scaleHorizontal(5),
            borderBottomWidth: 0.5,
            borderBottomColor: colors.card,
            flex: 1,
        },
        absoluteText: {
            position: 'absolute',
            right: 0,
            top: 0,
            fontSize: scaleFontSize(12),
            color: colors.text,
            fontFamily: 'Roboto-Regular',
        },
        text: {
            fontSize: scaleFontSize(16),
            color: colors.text,
            fontFamily: 'Roboto-Regular',
            marginLeft: scaleHorizontal(7)
        },
        button: {
            justifyContent: 'center',
            position: 'absolute',
            right: 0,
            top: 5,
        }
    });
    return styles;
};