import React, { FC, useCallback, useMemo, useState } from "react";
import { useUiContext } from "../../../../UIProvider";
import { ScreenContainer } from "../../../../UIKit/screenContainer";
import { getStyle } from "./style";
import { DashboardHeader } from "../../../dashboard/ui/components/dashboardHeader";
import { FlatList, Text, View } from 'react-native'
import { AdminButton } from "../components/adminButtonItem";
import { useTabulation } from "../../presenters/useTabulation";
import { observer } from "mobx-react";
import { InviteIcon } from "../../../../../assets/icons/InviteIcon";
import { AddUserIcon } from "../../../../../assets/icons/AddUserIcon";
import { TimeIcon } from "../../../../../assets/icons/TimeIcon";
import { companyModel } from "../../../shared/entities/company/CompanyModel";
import { UserListItem } from "../components/userListItem";
import { MembersListItem } from "../components/membersListItem";
import { MainButton } from "../../../shared/ui/mainButton";
import { useCreateTimeSheetUseCase } from "../../useCase/useCreateTimeSheetUseCase";
import { useFinishTimeSheetUseCase } from "../../useCase/useFinishTimeSheetUseCase";

export const UserTabulationView: FC = observer(() => {
    const { colors, t } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);
    const [start, setStart] = useState(true);

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
            {start
                ? <MainButton title={t("openWorkShift")} onPress={set} />
                : <MainButton title={t("closeWorkShift")} onPress={set} />
            }
        </View>
    );
});