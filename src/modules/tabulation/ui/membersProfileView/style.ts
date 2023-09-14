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
        },
        map: {
            width: '100%',
            height: scaleVertical(350),
            backgroundColor: 'tomato',
        },
        button: {
            position: 'absolute',
            width: scaleHorizontal(60),
            height: scaleVertical(60),
            backgroundColor: colors.primary,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 12,
            bottom: 10,
            right: 5
        },
        flatListTitle: {
            flexDirection: 'row',
            paddingHorizontal: scaleHorizontal(15),
            justifyContent: 'space-between',
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
            borderTopWidth: 0.5,
            paddingHorizontal: scaleHorizontal(15),
            marginTop: scaleVertical(10),
            paddingTop: scaleVertical(10),
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
        },
        historyWrapper: {
            paddingTop: scaleVertical(30),
            paddingBottom: scaleVertical(30),
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: scaleHorizontal(15),
            alignItems: 'center'
        },
        workShift: {
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: scaleHorizontal(25),
            paddingVertical: scaleVertical(10),
            borderWidth: 0.5,
            borderColor: colors.primary,
            borderRadius: 10
        },
    });
    return styles;
};