import { StyleSheet } from 'react-native';
import { IColors } from '../../UIProvider/theme/IColors';

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor:colors.background
        },
        contentContainerStyle: {
            flexGrow: 1,
            backgroundColor:colors.background
        },
        default:{
            flex:1,
            backgroundColor:colors.primary
        }
    });
    return styles;
}
