import { observer } from 'mobx-react';
import React, { FC, useMemo } from 'react';
import { useUiContext } from '../../../src/UIProvider';
import { HeaderWithBackButton } from '../../shared/ui/headerWithBackButton';
import { ScreenContainer } from '../../shared/ui/screenContainer';
import { getStyle } from './styles';
import { CustomInput } from '../../shared/ui/customInput';
import { useBypassCompany } from '../presenter/useBypassCompany';
import { RightToolBarButton } from './components/rightToolBarButton';

export const BypassCompanyView: FC = observer(() => {
    const { colors, t } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);
    const { companyName, setCompanyName, onCreateCompany } = useBypassCompany();

    return (
        <ScreenContainer>
            <HeaderWithBackButton title={t('createGroup')} >
                <RightToolBarButton title={t('create')} onPress={onCreateCompany} disabled={!companyName?.trim()} />
            </HeaderWithBackButton>
            <CustomInput
                autoFocus
                containerStyle={styles.containerInput}
                value={companyName}
                onChangeText={setCompanyName}
                placeholder={t('enterGroupName')}
            />
        </ScreenContainer>
    )
})
