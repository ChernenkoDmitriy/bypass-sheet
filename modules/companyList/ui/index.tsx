import { observer } from 'mobx-react-lite';
import React, { FC, useMemo } from 'react';
import { Image } from 'react-native';
import { useUiContext } from '../../../src/UIProvider';
import { HeaderWithBackButton } from '../../shared/ui/headerWithBackButton';
import { ScreenContainer } from '../../shared/ui/screenContainer';
import { useBypassSheetList } from '../presenter/useBypassSheetList';
import { BypassSheetsList } from './components/bypassSheetsList';
import { BypassItemCreator } from './components/bypassItemCreator';
import { ContinueReport } from './components/continueReport';
import { getStyle } from './styles';

export const BypassSheetListView: FC = observer(() => {
    const { t, colors } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);
    const { onGoCreateBypassList, bypassList, onChoseItem, onEditItem } = useBypassSheetList();

    return (
        <ScreenContainer>
            <HeaderWithBackButton isBackAvailable={false} >
                <Image style={styles.logo} source={require('../../../assets/img/logo.png')} />
            </HeaderWithBackButton>
            <ContinueReport />
            <BypassItemCreator title={t('objectsOfAssessment')} buttonText={t('newObject')} onPress={onGoCreateBypassList} />
            <BypassSheetsList bypassList={bypassList} onChoseRoom={onChoseItem} onEditItem={onEditItem}/>
        </ScreenContainer>
    )
})
