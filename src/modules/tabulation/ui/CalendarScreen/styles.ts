import { StyleSheet } from 'react-native';
import { IColors } from '../../../../UIProvider/colors/IColorsController';
import { scaleVertical } from '../../../../utils/Utils';

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            backgroundColor: colors.background,
        },
        monthContainer: {
            backgroundColor: colors.background,
        },
        dayTextColor: {
            color: colors.text
        },
        monthNameText: {
            color: colors.text,
           fontFamily:'Roboto-regular',
            fontWeight: '700',
        },
        selectedDayBackgroundColor: {

        }
    });
    return styles;
}
