import React, { FC, memo, useMemo } from "react";

import { getStyle } from "./style";
import { TouchableOpacity, Text, View } from 'react-native';
import { useUiContext } from "../../../../../UIProvider";
import { LogoPicker } from "../../../../../UIKit/logoPicker";
import { IMembers } from "../../../../shared/entities/members/IMembers";
import { DeleteIcon } from "../../../../../../assets/icons/DeleteIcon";
import { membersModel } from "../../../../shared/entities/members/MembersModel";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { ITimeSheet } from "../../../../shared/entities/timeSheet/ITimeSheet";
import moment from "moment";

interface IProps {
    timeSheetItem: ITimeSheet;
};

export const TimeSheetAdminItem: FC<IProps> = memo(({ timeSheetItem }) => {
    const { t, colors } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);
    const date = moment(timeSheetItem.startTime).format('DD.MM.YYYY');
    const timeStart = moment(timeSheetItem.startTime).format('HH:mm');
    const timeEnd = moment(timeSheetItem.endTime).format('HH:mm');

    return (
        <TouchableOpacity style={styles.container} onPress={() => { }}>
            <Text style={styles.text}>{date}</Text>
            <Text style={styles.text}>{timeStart}</Text>
            <Text style={styles.text}>{timeEnd}</Text>
        </TouchableOpacity>
    );
});