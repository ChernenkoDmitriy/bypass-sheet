import { StyleSheet } from 'react-native';
import { IColors } from '../../../../src/UIProvider/colors/IColorsController';
import { getInitialWindowMetrics, isIOS } from '../../../../src/utils/Utils';

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            paddingTop: isIOS ? getInitialWindowMetrics.insets.top : 0,
            width: '100%',
            height: 60 + (isIOS ? getInitialWindowMetrics.insets.top : 0),
            flexDirection: 'row',
            alignItems: 'center',
            borderBottomColor: colors.shadow,
            backgroundColor: colors.card,
            paddingRight: 20,
            shadowColor: colors.titleText,
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.1,
            elevation: 5,
            zIndex: 2,
        },
        buttonBack: {
            height: 50,
            width: 50,
            justifyContent: 'center',
            alignItems: 'center',
        },
        contentWrapper: {
            flexDirection: 'row',
        },
        titleContainer: {
            flex: 1,
            // marginLeft: 10,
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: 50,
            // alignItems: 'flex-start',
        },
        titleContainerButton: {
            justifyContent: 'center',
            alignItems: 'flex-start',
        },
        title: {
            fontSize: 20,
            lineHeight: 24,
            color: colors.titleText,
            fontFamily: 'Roboto-Regular',
        },
    });
    return styles;
}
