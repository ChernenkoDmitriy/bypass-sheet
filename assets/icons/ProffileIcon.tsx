import React, { FC } from 'react';
import Svg, { Path } from 'react-native-svg';
import { scaleVertical } from '../../src/utils/Utils';

interface IProps {
    width?: number,
    height?: number,
    color?: string,
}

export const ProfileIcon: FC<IProps> = ({ width, height, color }) => {
    return (
        <Svg width={width || scaleVertical(24)} height={height || scaleVertical(24)} viewBox="0 0 16 16" fill="none">
            <Path fill={color || "#9FA5B4"} d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
        </Svg>
    )
};
