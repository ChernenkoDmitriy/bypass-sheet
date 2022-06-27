import { observer } from 'mobx-react';
import React, { FC, useMemo } from 'react';
import { useUiContext } from '../../../src/UIProvider';
import { HeaderWithBackButton } from '../../shared/ui/headerWithBackButton';
import { MainButton } from '../../shared/ui/mainButton';
import { ScreenContainer } from '../../shared/ui/screenContainer';
import { useBypassSheet } from '../presenters/useBypassSheet';
import { ReportList } from './components/reportList';
import { getStyle } from './styles';

export const BypassSheetView: FC = observer(() => {
    const { colors, t } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);
    const { bypassReport, onChangeComment, onChangeRate, onAddPhoto, onDeletePhoto, onCreateReport, onChangeIsDone } = useBypassSheet();

    return (
        <ScreenContainer keyboardShouldPersistTaps={false} >
            <HeaderWithBackButton title={bypassReport?.title} />
            <ReportList {...{ bypassReport, onChangeComment, onChangeRate, onAddPhoto, onDeletePhoto, onChangeIsDone }} />
            <MainButton title={t('create')} onPress={onCreateReport} containerStyle={styles.button} />
        </ScreenContainer>
    )
})
