import { observer } from 'mobx-react';
import React, { FC, useMemo } from 'react';
import { useUiContext } from '../../../src/UIProvider';
import { HeaderWithBackButton } from '../../shared/ui/headerWithBackButton';
import { ScreenContainer } from '../../shared/ui/screenContainer';
import { useBypassCompany } from '../presenter/useBypassCompany';
import { RightToolBarButton } from '../../shared/ui/rightToolBarButton';
import { CompanyTop } from './components/companyTop';
import { EditableBypassSheet } from './components/editableBypassSheet';

export const BypassCompanyView: FC = observer(() => {
    const { t } = useUiContext();
    const { company, companyName, companyAddress, setCompanyAddress, setCompanyName, onSave } = useBypassCompany();

    return (
        <ScreenContainer>
            <HeaderWithBackButton title={t('createGroup')} >
                <RightToolBarButton title={t(company ? 'update' : 'create')} onPress={onSave} disabled={!companyName?.trim()} />
            </HeaderWithBackButton>
            <CompanyTop {...{ companyName, companyAddress, setCompanyAddress, setCompanyName }} />
            <EditableBypassSheet company={company}/>
        </ScreenContainer>
    )
})
