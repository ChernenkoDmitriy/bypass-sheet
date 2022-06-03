import { useKeyboard } from '@react-native-community/hooks';
import { observer } from 'mobx-react';
import React, { FC, useMemo } from 'react';
import { Pressable, View } from 'react-native';
import { DoneIcon } from '../../../../../assets/icons/DoneIcon';
import { TextIcon } from '../../../../../assets/icons/TextIcon';
import { useUiContext } from '../../../../../src/UIProvider';
import { getStyle } from './styles';

interface IProps {
    onAddCheckBox: () => void;
    onAddText: () => void;
}

export const BottomTaskMenu: FC<IProps> = observer(({ onAddCheckBox, onAddText }) => {
    const { keyboardShown } = useKeyboard();
    const { colors } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);

    return (keyboardShown
        ? <View style={styles.container}>
            <View style={styles.contentContainer}>
                <Pressable style={({ pressed }) => [styles.buttonContainer, { opacity: pressed ? 0.5 : 1 }]} onPress={onAddCheckBox}>
                    <View style={styles.checkBoxContainer}>
                        <DoneIcon width={18} height={18} />
                    </View>
                </Pressable>
                <Pressable style={({ pressed }) => [styles.buttonContainer, { opacity: pressed ? 0.5 : 1 }]} onPress={onAddText}>
                    <View style={styles.checkBoxContainer}>
                        <TextIcon width={12} height={12} />
                    </View>
                </Pressable>
            </View>
        </View>
        : null
    );
});
