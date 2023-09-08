import React, { FC, useCallback, useMemo } from "react";
import { useUiContext } from "../../../../UIProvider";
import { ScreenContainer } from "../../../../UIKit/screenContainer";
import { getStyle } from "./style";
import { DashboardHeader } from "../../../dashboard/ui/components/dashboardHeader";
import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import { observer } from "mobx-react";
import { membersModel } from "../../../shared/entities/members/MembersModel";
import { LogoPicker } from "../../../../UIKit/logoPicker";
import MapView from "react-native-maps";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { CalendarIcon } from "../../../../../assets/icons/CalendarIcon";
import { UseMembersProfile } from "../../presenters/useMembersProfile";
import { TimeSheetAdminItem } from "../components/timeSheetAdminItem";
import { timeSheetModel } from "../../../shared/entities/timeSheet/TimeSheetModel";
import { scaleHorizontal } from "../../../../utils/Utils";

export const MembersProfileView: FC = observer(() => {
    const { colors, t } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);
    const member = membersModel.chosenMember?.user;
    const navigation = useNavigation<StackNavigationProp<any>>();
    UseMembersProfile();

    const renderItem = useCallback(({ item }: any) => <TimeSheetAdminItem timeSheetItem={item} />, []);
    const keyExtractor = useCallback((item: { id: string }) => item.id, []);

    return (
        <ScreenContainer scrollEnabled edges={['bottom']} containerStyle={styles.container} headerComponent={<DashboardHeader title={t('profile')} isBackAvailable={true} />}>
            <View>
                <MapView style={styles.map}></MapView>
                {/* <TouchableOpacity style={styles.button}>
                    <Text style={{ fontSize: scaleFontSize(22), color: colors.text }}>?</Text>
                </TouchableOpacity> */}
            </View>
            <View style={styles.informationWrapper}>
                <LogoPicker logo={member?.avatar} />
                <View>
                    <Text style={styles.text}>{member?.first_name + ' ' + member?.last_name}</Text>
                    <Text style={styles.text}>{member?.phone}</Text>
                </View>
            </View>
            <View style={styles.scheduleWrapper}>
                <Text style={styles.text}>{t('schedule')}</Text>
                <View style={styles.workShift}>
                    <Text style={[styles.text, { marginLeft: 0 }]}>Standart</Text>
                </View>
            </View>
            <View style={styles.historyWrapper}>
                <Text style={styles.title}>{t('history')}</Text>
                <TouchableOpacity onPress={() => navigation.navigate('CalendarScreen')}>
                    <CalendarIcon color={colors.primary} />
                </TouchableOpacity>
            </View>
            <View style={styles.flatListTitle}>
                <Text style={styles.text}>{'День' + '            '}</Text>
                <Text style={styles.text}>Початок</Text>
                <Text style={styles.text}>Кінець</Text>
            </View>
            <FlatList
                scrollEnabled={false}
                showsVerticalScrollIndicator={false}
                data={timeSheetModel.timeSheetList}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
            />
        </ScreenContainer>
    );
});