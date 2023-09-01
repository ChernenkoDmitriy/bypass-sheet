import React, { FC } from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

interface IProps {
    width?: number,
    height?: number,
    color?: string,
};

export const MoonIcon: FC<IProps> = ({ width, height, color }) => (
    <Svg width={width || 26} height={height || 26} viewBox="0 0 24 24">
        <Path
        d="M3.32 11.684a9 9 0 0017.357 3.348A9 9 0 018.32 6.683c0-1.18.23-2.32.644-3.353a9.003 9.003 0 00-5.645 8.354z"
        stroke="#000"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
);