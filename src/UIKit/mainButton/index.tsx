import { FC, ReactNode, useMemo } from "react";
import { ActivityIndicator, Text, TextStyle, TouchableOpacity, TouchableOpacityProps, View, ViewStyle } from "react-native";
import { getStyle } from "./styles";
import { useUiContext } from "../../UIProvider";

interface IProps extends TouchableOpacityProps {
    title: string;
    icon?: ReactNode;
    inProgress?: boolean;
    containerStyle?: ViewStyle;
    titleStyle?: TextStyle;
};

export const MainButton: FC<IProps> = ({ title, icon, disabled = false, inProgress = false, onPress, titleStyle, containerStyle, ...otherProps }) => {
    const { colors } = useUiContext();
    const styles = useMemo(() => getStyle(disabled, colors), [disabled, colors]);

    return (
        <TouchableOpacity {...otherProps} disabled={disabled} style={[styles.container, containerStyle]} onPress={onPress} >
                {icon && <View style={styles.iconWrapper}>{icon}</View>}
                {inProgress
                    ? <ActivityIndicator color={colors.text} size={'small'} />
                    : <Text style={[styles.title, titleStyle]}>{title}</Text>
                }
        </TouchableOpacity>
    );
};