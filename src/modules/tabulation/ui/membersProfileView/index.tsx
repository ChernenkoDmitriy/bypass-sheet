import React, { FC, useMemo } from "react";
import { useUiContext } from "../../../../UIProvider";
import { ScreenContainer } from "../../../../UIKit/screenContainer";
import { getStyle } from "./style";
import { DashboardHeader } from "../../../dashboard/ui/components/dashboardHeader";
import { Text, View } from 'react-native'
import { observer } from "mobx-react";
import { companyModel } from "../../../shared/entities/company/CompanyModel";
import { membersModel } from "../../../shared/entities/members/MembersModel";
import { LogoPicker } from "../../../../UIKit/logoPicker";
import MapView from "react-native-maps";

export const MembersProfileView: FC = observer(() => {
    const { colors, t } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);
    const member = membersModel.chosenMember?.user
    return (
        <ScreenContainer edges={['bottom']} containerStyle={styles.container} headerComponent={<DashboardHeader title={t('profile')} isBackAvailable={true} />}>
            <MapView style={styles.map}/>
            <View style={styles.informationWrapper}>
                <LogoPicker logo={member?.avatar} />
                <View>
                    <Text style={styles.text}>{member?.first_name + ' ' + member?.last_name}</Text>
                    <Text style={styles.text}>{member?.phone}</Text>
                </View>
            </View>
            <View style={styles.scheduleWrapper}>
                <Text style={styles.text}>{t('schedule')}</Text>
                <View>

                </View>
            </View>
        </ScreenContainer>
    );
});