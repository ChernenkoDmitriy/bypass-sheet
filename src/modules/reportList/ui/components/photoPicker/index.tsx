
import React, { FC, useCallback, useMemo } from 'react';
import { View, TouchableOpacity } from 'react-native';
import FastImage from 'react-native-fast-image';
import { DeleteCircleIcon } from '../../../../../../assets/icons/DeleteCircleIcon';
import { ICropedImage } from '../../../../../../libs/imagePicker/IImagePicker/ICropedImage';
import { useUiContext } from '../../../../../UIProvider';
import { getStyle } from './styles';

interface IProps {
    photos: ICropedImage[];
    id: number;
    onDeletePhoto: (id: number, path: string) => void;
}

export const PhotoPicker: FC<IProps> = ({ id, photos, onDeletePhoto }) => {
    const { colors, t } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);

    const onHandleDeletePhoto = useCallback((path: string) => {
        onDeletePhoto(id, path);
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.photoWrapper}>
                {
                    photos.map((item) =>
                        <View key={item.path} style={styles.photoContainer} >
                            <FastImage
                                source={{ uri: 'data:image/png;base64,' + item.data, priority: FastImage.priority.high, }}
                                resizeMode={FastImage.resizeMode.stretch}
                                style={styles.photo} />
                            <TouchableOpacity style={styles.deleteButton} onPress={() => onHandleDeletePhoto(item.path)} >
                                <DeleteCircleIcon />
                            </TouchableOpacity>
                        </View>
                    )
                }
            </View>
        </View>
    )
}
