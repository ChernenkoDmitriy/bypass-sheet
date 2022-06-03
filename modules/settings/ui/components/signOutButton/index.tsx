import React, { FC, memo, useState } from 'react';
import { useUiContext } from '../../../../../src/UIProvider';
import { ModalPopup } from '../../../../shared/ui/modalPopup';
import { SettingButton } from '../settingButton';

interface IProps {
    onSignOut: () => void;
}

export const SignOutButton: FC<IProps> = memo(({ onSignOut }) => {
    const [isVisible, setIsVisible] = useState(false);
    const { t } = useUiContext();

    const onOpenModal = () => {
        setIsVisible(true);
    }

    const onCloseModal = () => {
        setIsVisible(false);
    }

    return (
        <>
            <SettingButton title={t('signOut')} onPress={onOpenModal} />
            <ModalPopup isVisible={isVisible} onCancel={onCloseModal} onConfirm={onSignOut} text={t('signOutAccountText')} />
        </>
    );
});
