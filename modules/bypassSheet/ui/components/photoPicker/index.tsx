
import React, { FC, useCallback, useMemo } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import FastImage from 'react-native-fast-image';
import { ICropedImage } from '../../../../../libs/imagePicker/IImagePicker/ICropedImage';
import { imagePicker } from '../../../../../libs/imagePicker/RNImageCropPicker';
import { useUiContext } from '../../../../../src/UIProvider';
import { getStyle } from './styles';

interface IProps {
    photos: ICropedImage[];
    id: number;
    onAddPhoto: (photo: ICropedImage, id: number) => void;
    onDeletePhoto: (id: number, path: string) => void;
}

export const PhotoPicker: FC<IProps> = ({ id, photos, onAddPhoto, onDeletePhoto }) => {
    const { colors, t } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);

    const onHandleAddPhoto = useCallback(() => {
        imagePicker.onLoadPhoto()
            .then(data => data && onAddPhoto(data, id));
    }, []);

    const onHandleDeletePhoto = useCallback((path: string) => {
        onDeletePhoto(id, path);
    }, []);

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.buttonAddPhoto} onPress={onHandleAddPhoto}>
                <Text style={styles.textButton}>{t('addPhoto')}</Text>
            </TouchableOpacity>
            <View style={styles.photoWrapper}>
                {
                    photos.map((item) =>
                        <TouchableOpacity key={item.path} style={styles.buttonPhoto} onPress={() => onHandleDeletePhoto(item.path)}>
                            <FastImage
                                source={{ uri: 'data:image/png;base64,' + item.data, priority: FastImage.priority.high, }}
                                resizeMode={FastImage.resizeMode.stretch}
                                style={styles.photo} />
                        </TouchableOpacity>
                    )
                }
            </View>
        </View>
    )
}
