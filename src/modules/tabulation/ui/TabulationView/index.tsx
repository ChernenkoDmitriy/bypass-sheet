import React, { FC, useCallback, useMemo } from "react";
import { useUiContext } from "../../../../UIProvider";
import { ScreenContainer } from "../../../../UIKit/screenContainer";
import { getStyle } from "./style";
import { DashboardHeader } from "../../../dashboard/ui/components/dashboardHeader";
import { observer } from "mobx-react";
import { AdminTabulationView } from "../AdminTabulationView";
import { UserTabulationView } from "../UserTabulationView";
import { companyModel } from "../../../../entities/company/CompanyModel";

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