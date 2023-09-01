import React, { FC, useMemo } from "react";

import { getStyle } from "./style";
import { TouchableOpacity, View } from 'react-native';
import { useUiContext } from "../../../../../UIProvider";

interface IProps {
};

export const CompanyItem: FC<IProps> = ({  }) => {
    const { colors } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);

    return (
        <TouchableOpacity style={styles.container} >
        </TouchableOpacity>
    );
};