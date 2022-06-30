
import React, { FC, useCallback, useMemo, useState } from 'react';
import { View, Text, Alert } from 'react-native';
import { ICropedImage } from '../../../../../libs/imagePicker/IImagePicker/ICropedImage';
import { imagePicker } from '../../../../../libs/imagePicker/RNImageCropPicker';
import { useUiContext } from '../../../../../src/UIProvider';
import { IBypassItem } from '../../../../shared/entities/bypassList/IBypassItem';
import { CustomInput } from '../../../../shared/ui/customInput';
import { BottomItemButtons } from '../bottomItemButtons';
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

export const ReportItem: FC<IProps> = ({ item, onChangeComment, onChangeRate, onAddPhoto, onDeletePhoto }) => {
    const { title, comment, id, rate, photos } = item;
    const [isCommentVisible, setIsCommentVisible] = useState(false);
    const { colors, t } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);

    const onHandleChangeComment = useCallback((text: string) => {
        onChangeComment(text, id);
    }, []);

    const onShowComment = useCallback(() => {
        setIsCommentVisible(prev => !prev);
    }, []);

    const onHandleAddPhoto = () => {
        Alert.alert('Добавить фото', 'Сделайте новое фото или  загрузите из галерии', [{
            text: 'Загрузить фото',
            onPress: onOpenPicker
        }, {
            text: 'Сделать фото',
            onPress: onLoadPhoto
        }])
    };

    const onOpenPicker = () => {
        imagePicker.onOpenPicker()
            .then(data => data && onAddPhoto(data, id))
    }

    const onLoadPhoto = () => {
        imagePicker.onLoadPhoto()
            .then(data => data && onAddPhoto(data, id))
    }

    return (
        <View style={styles.container}>
            <View style={styles.titleWrapper}>
                <Text style={styles.title}>{title}</Text>
            </View>
            <RateButtons id={id} rate={rate} onChangeRate={onChangeRate} />
            <BottomItemButtons onShowComment={onShowComment} addPhoto={onHandleAddPhoto} />
            {
                isCommentVisible && <View style={styles.commentContainer}>
                    <CustomInput
                        value={comment}
                        onChangeText={onHandleChangeComment}
                        placeholder={t('comment')}
                        inputStyle={{ marginVertical: 10, textAlignVertical: 'top', }}
                        containerStyle={styles.input}
                        multiline
                    />
                </View>
            }
            {photos?.length ? <PhotoPicker  {...{ id, photos, onDeletePhoto }} /> : null}
        </View>
    )
}
