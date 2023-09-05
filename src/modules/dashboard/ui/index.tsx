import { observer } from 'mobx-react-lite';
import React, { FC, useMemo } from 'react';
import { useUiContext } from '../../../UIProvider';
import { ScreenContainer } from '../../shared/ui/screenContainer';
import { useBypassSheetList } from '../presenter/useBypassSheetList';
import { BypassSheetsList } from './components/bypassSheetsList';
import { BypassItemCreator } from './components/bypassItemCreator';
import { ContinueReport } from './components/continueReport';
import { getStyle } from './styles';
import { DashboardHeader } from './components/dashboardHeader';
import { companyModel } from '../../shared/entities/company/CompanyModel';

export const DashboardView: FC = observer(() => {
    const { t, colors } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);
    const { onGoCreateBypassList, bypassList, onChoseItem, onEditItem } = useBypassSheetList();

    return (
        <ScreenContainer>
            <DashboardHeader isBackAvailable={false} />
            <ContinueReport />
            <BypassItemCreator title={t('objectsOfAssessment')} buttonText={t('newObject')} onPress={onGoCreateBypassList} />
            <BypassSheetsList bypassList={bypassList} onChoseRoom={onChoseItem} onEditItem={onEditItem} />
        </ScreenContainer>
    )
})
