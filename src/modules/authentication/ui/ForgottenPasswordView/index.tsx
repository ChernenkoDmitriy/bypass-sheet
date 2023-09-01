import React, { FC, useMemo } from 'react';
import { getStyle } from './styles';
import { useUiContext } from '../../../../UIProvider';
import { observer } from 'mobx-react';

import { ScreenContainer } from '../../../../UIKit/screenContainer';
import { HeaderWithBackButton } from '../../../shared/ui/headerWithBackButton';
import { MainInput } from '../../../../UIKit/mainInput';
import { MainButton } from '../../../../UIKit/mainButton';

export const ForgottenPasswordView: FC = observer(() => {
    const { colors, t } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);

    return (
        <ScreenContainer containerStyle={styles.container} headerComponent={<HeaderWithBackButton title='Сброс пароля' />} edges={['bottom']}>
            <MainInput
            containerStyle={styles.inputContainer}
                title={t('phoneNumber')}
                placeholder={t('addPhoneNumber')}
            />
            <MainButton title={t('restore')} />
        </ScreenContainer>
    );
});