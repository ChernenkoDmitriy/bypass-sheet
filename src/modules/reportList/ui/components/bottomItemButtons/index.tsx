import React, { FC, useMemo } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { CommentIcon } from '../../../../../../assets/icons/CommentIcon';
import { PhotoIcon } from '../../../../../../assets/icons/PhotoIcon';
import { useUiContext } from '../../../../../UIProvider';
import { getStyle } from './styles';

interface Props {
    onShowComment: () => void;
    addPhoto:  () => void;
}

export const BottomItemButtons: FC<Props> = ({ onShowComment, addPhoto }) => {
    const { colors, t } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={onShowComment}>
                <CommentIcon />
                <Text style={styles.textButton}>{t('comment')}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, { marginLeft: 12 }]} onPress={addPhoto}>
                <PhotoIcon />
                <Text style={styles.textButton}>{t('photo')}</Text>
            </TouchableOpacity>
        </View>
    )
}
