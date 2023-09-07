import { StyleSheet } from "react-native";
import { IColors } from "../../../../UIProvider/colors/IColorsController";
import { scaleFontSize, scaleHorizontal, scaleVertical } from "../../../../utils/Utils";

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
        },
        buttonWrapper: {
            flexDirection: 'row',
            justifyContent: 'space-between'
        },
        title: {
            fontSize: scaleFontSize(22),
            color: colors.text,
            fontFamily: 'Roboto-Regular',
            textAlign: 'center',
            paddingVertical: scaleVertical(25),
        },
        map: {
            width: '100%',
            height: scaleVertical(350),
            backgroundColor: 'tomato',
            justifyContent: 'center',
            alignItems: 'center'
        },
        informationWrapper: {
            paddingHorizontal: scaleHorizontal(15),
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: scaleVertical(10)
        },
        text: {
            fontSize: scaleFontSize(14),
            color: colors.text,
            marginLeft: scaleHorizontal(10)
        },
        scheduleWrapper: {
            paddingHorizontal: scaleHorizontal(15),
            marginTop: scaleVertical(10)
        }
    });
    return styles;
};