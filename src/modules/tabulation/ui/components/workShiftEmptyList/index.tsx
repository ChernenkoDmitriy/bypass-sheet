import React, { FC, useCallback, useMemo } from "react";
import { useUiContext } from "../../../../../UIProvider";
import { getStyle } from "./style";
import { Text, TouchableOpacity, View } from 'react-native'
import { MainButton } from "../../../../../UIKit/mainButton";
import { scaleHorizontal } from "../../../../../utils/Utils";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

export const WorkShiftEmptyList: FC = ({ }) => {
    const { colors, t } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);
    const navigation = useNavigation<StackNavigationProp<any>>();

    const onCreateWorkShift = () => navigation.navigate('CreateWorkShiftView');

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{t('workShiftEmptyList')}</Text>
            <MainButton title={t('create')} containerStyle={{ paddingHorizontal: scaleHorizontal(40) }} onPress={onCreateWorkShift}/>
        </View>
    );
};