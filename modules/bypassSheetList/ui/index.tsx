import { observer } from 'mobx-react-lite';
import React, { FC } from 'react';
import { useUiContext } from '../../../src/UIProvider';
import { CircleAbsoluteButton } from '../../shared/ui/circleAbsoluteButton';
import { HeaderWithBackButton } from '../../shared/ui/headerWithBackButton';
import { ScreenContainer } from '../../shared/ui/screenContainer';
import { useBypassSheetList } from '../presenter/useBypassSheetList';
import { BypassSheetsList } from './components/bypassSheetsList';

export const BypassSheetListView: FC = observer(() => {
    const { t } = useUiContext();
    const { onGoCreateBypassCompany, bypassList, onChoseItem } = useBypassSheetList();

    return (
        <ScreenContainer>
            <HeaderWithBackButton title={t('appName')} isBackAvailable={false} />
            <BypassSheetsList bypassList={bypassList} onChoseRoom={onChoseItem} />
            <CircleAbsoluteButton onPress={onGoCreateBypassCompany} />
        </ScreenContainer>
    )
})
