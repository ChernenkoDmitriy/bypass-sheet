import React, { FC, useCallback, useMemo } from "react";
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
import { AdminTabulationView } from "../AdminTabulationView";
import { UserTabulationView } from "../UserTabulationView";

export const TabulationView: FC = observer(() => {
    const { colors, t } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);

    return (
        <ScreenContainer edges={['bottom']} containerStyle={styles.container} headerComponent={<DashboardHeader title={companyModel.chosenCompany?.name} isBackAvailable={false} />}>
            {companyModel.chosenCompany?.settings[0].role === 'admin'
                ? <AdminTabulationView />
                : <UserTabulationView />
            }
        </ScreenContainer>
    );
});