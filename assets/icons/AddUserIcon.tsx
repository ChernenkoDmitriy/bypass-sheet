import React, { FC } from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"
import { scaleVertical } from "../../src/utils/Utils";

interface IProps {
    width?: number,
    height?: number,
    color?: string,
}

export const AddUserIcon: FC<IProps> = ({ width, height, color }) => (
    <Svg 
    width={width || scaleVertical(26)} 
    height={height || scaleVertical(26)} 
    viewBox="0 0 24 24">
        <Path d="M2 21h8a1 1 0 000-2H3.071A7.011 7.011 0 0110 13a5.044 5.044 0 10-3.377-1.337A9.01 9.01 0 001 20a1 1 0 001 1zm8-16a3 3 0 11-3 3 3 3 0 013-3zm13 11a1 1 0 01-1 1h-3v3a1 1 0 01-2 0v-3h-3a1 1 0 010-2h3v-3a1 1 0 012 0v3h3a1 1 0 011 1z" fill={color} />
    </Svg>
);
