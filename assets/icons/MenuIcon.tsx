import React, { FC } from "react"
import Svg, { Path } from "react-native-svg"

interface IProps {
    width?: number;
    height?: number;
    color?: string;
};

export const MenuIcon: FC<IProps> = ({ width, height, color }) => (
    <Svg viewBox="0 0 122 30" width={width || 24} height={height || 6}  >
        <Path
            fill={color || '#000'}
            d="M0 15a15 15 0 1 1 15 15A15 15 0 0 1 0 15Zm92.93 0a15 15 0 1 1 15 15 15 15 0 0 1-15-15Zm-46.47 0a15 15 0 1 1 15 15 15 15 0 0 1-15-15Z"
        />
    </Svg>
);
