
import React, { FC, useCallback, useMemo, useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { ICropedImage } from '../../../../../libs/imagePicker/IImagePicker/ICropedImage';
import { useUiContext } from '../../../../../src/UIProvider';
import { IBypassItem } from '../../../../shared/entities/bypassList/IBypassItem';
import { CustomCheckBox } from '../../../../shared/ui/customCheckBox';
import { CustomInput } from '../../../../shared/ui/customInput';
import { PhotoPicker } from '../photoPicker';
import { RateButtons } from '../rateButtons';
import { getStyle } from './styles';

interface IProps {
    item: IBypassItem;
    onChangeComment: (text: string, id: number) => void;
    onChangeRate: (rate: number, id: number) => void;
    onAddPhoto: (photo: ICropedImage, id: number) => void;
    onDeletePhoto: (id: number, path: string) => void;
    onChangeIsDone: (id: number) => void;
}

export const ReportItem: FC<IProps> = ({ item, onChangeComment, onChangeRate, onAddPhoto, onDeletePhoto, onChangeIsDone }) => {
    const { title, comment, id, isDone, rate, photos } = item;
    const [isCommentVisible, setIsCommentVisible] = useState(false);
    const { colors, t } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);

    const onHandleChangeComment = useCallback((text: string) => {
        onChangeComment(text, id);
    }, []);

    const onHandleChangeIsDone = useCallback(() => {
        onChangeIsDone(id);
    }, []);

    const onShowComment = useCallback(() => {
        setIsCommentVisible(prev => !prev);
    }, []);

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', }}>
                <View style={styles.contentWrapper}>
                    <View style={styles.titleWrapper}>
                        <Text style={styles.title}>{title}</Text>
                    </View>
                    <View style={styles.footer}>
                        <TouchableOpacity style={styles.commentButton} onPress={onShowComment}>
                            <Text style={styles.textButton}>{t('addComment')}</Text>
                        </TouchableOpacity>
                        <RateButtons id={id} rate={rate} onChangeRate={onChangeRate} />
                    </View>
                </View>
                <TouchableOpacity style={styles.sideContainer} onPress={onHandleChangeIsDone}>
                    <CustomCheckBox colors={colors} value={isDone} />
                </TouchableOpacity>
            </View>
            {
                isCommentVisible && <View style={styles.commentContainer}>
                    <CustomInput value={comment} onChangeText={onHandleChangeComment} placeholder={t('comment')} inputStyle={{ marginVertical: 10, textAlignVertical: 'top', }} containerStyle={styles.input} multiline />
                    <PhotoPicker  {...{ id, photos, onAddPhoto, onDeletePhoto }} />
                </View>
            }
        </View>
    )
}
