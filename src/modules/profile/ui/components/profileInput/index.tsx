import React, { FC, useMemo, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { QuestionIcon } from '../../../../../../assets/icons/QuestionIcon';
import { useUiContext } from '../../../../../UIProvider';
import { ModalPopup } from '../../../../shared/ui/modalPopup';
import { getStyle } from './styles';

interface IProps {
    image?: number;
    title: string;
    value: string;
    onChangeText: (text: string) => void;
}

export const ProfileInput: FC<IProps> = ({ image, onChangeText, title, value }) => {
    const { colors } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);
    const [showDescription, setShowDescription] = useState(false);

    return (
        <View style={styles.container}>
            <View style={styles.titleWrapper}>
                <View style={{ flex: 1 }}>
                    <Text style={styles.title}>{title}</Text>
                </View>
                <TouchableOpacity style={styles.button} onPress={() => setShowDescription(true)}>
                    <QuestionIcon />
                </TouchableOpacity>
            </View>
            <TextInput
                style={styles.input}
                value={value}
                onChangeText={onChangeText}
            />
            <ModalPopup
                image={image}
                isVisible={showDescription}
                onConfirm={() => setShowDescription(false)}
                text={title}
            />
        </View>
    );
};
