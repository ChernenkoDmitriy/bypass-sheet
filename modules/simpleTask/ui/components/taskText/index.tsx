import React, { FC, useCallback, useMemo } from 'react';
import { View, TextInput, NativeSyntheticEvent, TextInputKeyPressEventData } from 'react-native';
import { useUiContext } from '../../../../../src/UIProvider';
import { ITaskText } from '../../../../shared/entities/simpleTask/ITaskContent';
import { CustomCheckBox } from '../../../../shared/ui/customCheckBox';
import { useTaskTextController } from '../../../presenters/useTaskTextController';
import { getStyle } from './styles';

interface IProps {
    isShowPlaceholder: boolean,
    item: ITaskText;
    onSetActiveContentId: (item: number | string) => void;
}

export const TaskText: FC<IProps> = ({ item, isShowPlaceholder, onSetActiveContentId }) => {
    const { colors, t } = useUiContext();
    const styles = useMemo(() => getStyle(colors, item.is_done), [colors, item.is_done]);
    const { onKeyPress, onChangeText, onDoneTask, onSelectionChange } = useTaskTextController();

    const onKeyPressHandler = useCallback((event: NativeSyntheticEvent<TextInputKeyPressEventData>) => {
        onKeyPress(event, item);
    }, [item]);

    const onChangeTextHandler = useCallback((text: string) => {
        onChangeText(text, item);
    }, [item]);

    const onChoose = useCallback(() => {
        onDoneTask(item);
    }, [item]);

    const onFocus = useCallback(() => {
        onSetActiveContentId(item.id);
    }, [item]);

    return (
        <View style={styles.container}>
            {item.is_show_check_box && <View style={styles.checkboxContainer}>
                <CustomCheckBox colors={colors} value={item.is_done} onChoose={onChoose} />
            </View>}
            <View style={styles.inputContainer}>
                <TextInput
                    autoFocus
                    scrollEnabled={false}
                    onKeyPress={onKeyPressHandler}
                    onChangeText={onChangeTextHandler}
                    onFocus={onFocus}
                    onSelectionChange={onSelectionChange}
                    value={item.text}
                    multiline
                    style={styles.input}
                    placeholder={isShowPlaceholder ? t('startTyping') : ''}
                />
            </View>
        </View>
    );
};
