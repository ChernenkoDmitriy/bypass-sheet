import React, { FC, ReactElement, useMemo } from "react";
import { useUiContext } from "../../../../../UIProvider";
import { getStyle } from "./style";
import { Text, TouchableOpacity, View } from 'react-native'

interface IProps {
    icon: ReactElement;
    onPress?: () => void;
};

export const AdminButton: FC<IProps> = ({ icon, onPress }) => {
    const { colors, t } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);

    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            {icon}
        </TouchableOpacity>
    );
};