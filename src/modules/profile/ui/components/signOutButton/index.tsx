import React, { FC, memo } from 'react';
import { useUiContext } from '../../../../../UIProvider';
import { useSafeState } from '../../../../shared/hooks/useSafeState';
import { ModalPopup } from '../../../../shared/ui/modalPopup';
import { SettingButton } from '../settingButton';

interface IProps {
    onSignOut: () => void;
}

export const SignOutButton: FC<IProps> = memo(({ onSignOut }) => {
    const [isVisible, setIsVisible] = useSafeState(false);
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
