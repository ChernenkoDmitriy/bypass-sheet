import { StyleSheet } from "react-native";
import { IColors } from "../../../../UIProvider/colors/IColorsController";
import { scaleFontSize, scaleHorizontal, scaleVertical } from "../../../../utils/Utils";

export const getStyle = (colors: IColors, selectTime: boolean) => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            paddingHorizontal: scaleHorizontal(15),
        },
        timeButton: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottomWidth: 1,
            borderColor: selectTime ? colors.primary : 'red',
            marginBottom: scaleVertical(5)
        },
        text: {
            fontSize: scaleFontSize(20),
            marginTop: scaleVertical(40),
            alignItems: 'center',
            textAlign: 'center'
        },
    });
    return styles;
};