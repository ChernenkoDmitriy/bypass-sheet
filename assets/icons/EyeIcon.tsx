import React, { FC } from "react";
import Svg, { Path } from "react-native-svg";

interface IProps {
    width?: number,
    height?: number,
    color?: string,
};

export const EyeIcon: FC<IProps> = ({ width, height, color }) => (
    <Svg
        width={width || 25}
        height={height || 25}
        viewBox="0 0 22 16">
        <Path d="M11 .5C6 .5 1.73 3.61 0 8c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5C20.27 3.61 16 .5 11 .5zM11 13c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8C9.34 5 8 6.34 8 8s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"
            fill={color || "#000"} />
    </Svg>
);