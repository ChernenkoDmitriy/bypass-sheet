import React, { FC, useCallback, useMemo } from "react";
import { useUiContext } from "../../../../../UIProvider";
import { getStyle } from "./style";
import { Text, TouchableOpacity, View } from 'react-native'
import { IWorkShift } from "../../../../shared/entities/workShift/IWorkShift";
import { observer } from "mobx-react";
import { OptionsIcon } from "../../../../../../assets/icons/optionsIcon";
import { MenuView } from "@react-native-menu/menu";

interface IProps {
    workShift: IWorkShift;
    deleteWorkShift: (id: number, company_id: number) => void;
    onEditWorkShift: (id: number, startTime: string, endTime: string, name: string) => void
};

export const WorkShiftItem: FC<IProps> = observer(({ workShift, deleteWorkShift, onEditWorkShift }) => {
    const { colors, t } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{workShift.name}</Text>
            <Text style={styles.text}>{workShift.startTime + ' --- ' + workShift.endTime}</Text>
            <MenuView
                style={styles.optionsButton}
                onPressAction={({ nativeEvent }) => {
                    nativeEvent.event === '1'
                        ? onEditWorkShift(workShift.id, workShift.startTime, workShift.endTime, workShift.name)
                        : deleteWorkShift(workShift.id, workShift.company_id);
                    ;
                }}
                actions={[
                    {
                        id: '1',
                        title: t('edit'),
                        titleColor: "#000",
                    },
                    {
                        id: '2',
                        title: t('delete'),
                        titleColor: "#000",
                    },
                ]}
                shouldOpenOnLongPress={false}
            >
                <TouchableOpacity >
                    <OptionsIcon color={colors.icon} />
                </TouchableOpacity>
            </MenuView>
        </View>
    );
});