import React, { FC, useMemo } from "react";

import { getStyle } from "./style";
import { TouchableOpacity, Text, View } from 'react-native';
import { useUiContext } from "../../../../../UIProvider";
import { OptionsIcon } from "../../../../../../assets/icons/optionsIcon";

interface IProps {
};

export const CompanyItem: FC<IProps> = ({ }) => {
    const { colors } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);

    return (
        <TouchableOpacity style={styles.container} >
            <View style={styles.informationWrapper}>
                <Text style={styles.text}>Тестовая компания</Text>
                <Text style={styles.text}>0 сотрудников</Text>
            </View>
            <TouchableOpacity style={styles.optionsButton}>
                <OptionsIcon color={colors.card} />
            </TouchableOpacity>
        </TouchableOpacity>
    );
};