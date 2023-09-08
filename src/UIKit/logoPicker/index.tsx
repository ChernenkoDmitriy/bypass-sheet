import React, { FC, memo, useCallback, useMemo } from 'react';
import { TouchableOpacity, ViewStyle, Text } from 'react-native';
import FastImage from 'react-native-fast-image';
import { useUiContext } from '../../UIProvider';
import { getStyle } from './styles';
import { imagePicker } from '../../../libs/imagePicker/RNImageCropPicker';
import { CameraIcon } from '../../../assets/icons/CameraIcon';

interface IProps {
    size?: number;
    name?: string;
    logo: string | null | undefined;
    cropping?: boolean;
    containerStyle?: ViewStyle;
}

export const LogoPicker: FC<IProps> = memo(({ name, logo, cropping,  size = 48, containerStyle = {} }) => {
    const { colors } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);

    const onPickImage = useCallback(() => {
        // imagePicker.onOpenPicker({ cropping }).then(image => image && onSaveLogo?.(image as any));
    }, []);

    return (
        <TouchableOpacity
            onPress={onPickImage}
            style={[styles.container, containerStyle, size ? { width: size, height: size } : undefined]} >
            {logo
                ? <FastImage
                    source={{ uri: logo, priority: FastImage.priority.high, }}
                    resizeMode={'cover'}
                    style={[styles.logo, size ? { width: size, height: size } : undefined]} />
                :
                name
                    ? <Text style={[styles.logoText]}>{name?.[0]}{name?.[1]}</Text>
                    : <CameraIcon width={size} height={size} color={colors.card} />}
        </TouchableOpacity>
    )

});
