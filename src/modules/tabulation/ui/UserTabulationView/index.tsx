import React, { FC, useEffect, useMemo, useState } from "react";
import { useUiContext } from "../../../../UIProvider";
import { getStyle } from "./style";
import { View, Text } from 'react-native'
import { observer } from "mobx-react";
import { MainButton } from "../../../shared/ui/mainButton";
import { useCreateTimeSheetUseCase } from "../../useCase/useCreateTimeSheetUseCase";
import { useFinishTimeSheetUseCase } from "../../useCase/useFinishTimeSheetUseCase";
import { UserCalendar } from "../components/userCalendar";
import { useTimeSheetUserListUseCase } from "../../../settings/useCase/useTimeSheetUserListUseCase";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { companyModel } from "../../../../entities/company/CompanyModel";

export const UserTabulationView: FC = observer(() => {
    const { colors, t } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);
    const [start, setStart] = useState(true);
    const navigation = useNavigation<StackNavigationProp<any>>();

    const openHistory = () => navigation.navigate('HistoryMembersView');

    useEffect(() => {
        useTimeSheetUserListUseCase(companyModel.chosenCompany?.id || 0, 1613980001709, 16939800017090);
    }, []);

    const set = async () => {
        if (start) {
            await useCreateTimeSheetUseCase(companyModel.chosenCompany?.id || 0);
        } else {
            await useFinishTimeSheetUseCase(companyModel.chosenCompany?.id || 0);
        };
        setStart(prev => !prev);
    };

    return (
        <View style={styles.container}>
            <UserCalendar />
            <View style={styles.buttonWrapper}>
                {start
                    ? <MainButton title={t("openWorkShift")} onPress={set} />
                    : <MainButton title={t("closeWorkShift")} onPress={set} />
                }
                <Text style={styles.buttonText} onPress={openHistory}>{t('history')}</Text>
                <Text style={styles.text}>{t('toStartShift')}</Text>
            </View>
        </View>
    );
});