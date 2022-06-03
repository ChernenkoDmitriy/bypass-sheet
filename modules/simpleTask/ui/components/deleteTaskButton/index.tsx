import React, { FC, useMemo, useState } from 'react';
import { Pressable } from 'react-native';
import { DeleteIcon } from '../../../../../assets/icons/DeleteIcon';
import { useUiContext } from '../../../../../src/UIProvider';
import { ModalPopup } from '../../../../shared/ui/modalPopup';
import { getStyle } from './styles';

interface IProps {
    onDeleteTask: () => void;
}

export const DeleteTaskButton: FC<IProps> = ({ onDeleteTask }) => {
    const [isVisible, setIsVisible] = useState(false);
    const { t, colors } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);

    const onOpenModal = () => {
        setIsVisible(true);
    }

    const onCloseModal = () => {
        setIsVisible(false);
    }

    return <>
        <Pressable style={({ pressed }) => [styles.container, { opacity: pressed ? 0.5 : 1 }]} onPress={onOpenModal}>
            <DeleteIcon />
        </Pressable>
        <ModalPopup isVisible={isVisible} onCancel={onCloseModal} onConfirm={onDeleteTask} text={t('askDeleteTask')} />
    </>
};
