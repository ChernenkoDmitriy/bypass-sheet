import React, { FC } from 'react';
import FastImage, { ImageStyle, ResizeMode } from 'react-native-fast-image';
import { configModel } from '../../../../src/config';

interface IProps {
    uri: string;
    style: ImageStyle;
    resizeMode?: ResizeMode;
}

export const CustomImage: FC<IProps> = ({ uri, style }) => {
    return <FastImage
        source={{ uri: configModel.LINKS.HOST_IMAGES + uri, priority: FastImage.priority.high, }}
        resizeMode={FastImage.resizeMode.contain}
        style={style} />
};

