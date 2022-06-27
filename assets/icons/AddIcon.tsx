import React, { FC } from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

interface IProps {
    width?: number,
    height?: number,
    color?: string,
}

export const AddIcon: FC<IProps> = ({ width, height, color }) => (
    <Svg width={width || 20} height={height || 20} viewBox="0 0 20 20">
        <G clipPath="url(#a)">
            <Path
                d="M10 0a10.003 10.003 0 1 1-7.07 2.93A9.97 9.97 0 0 1 10 0Zm4.42 9.248v1.504a.651.651 0 0 1-.65.651h-2.377v2.37a.651.651 0 0 1-.65.65H9.247a.651.651 0 0 1-.651-.65v-2.38h-2.37a.651.651 0 0 1-.65-.65V9.247a.651.651 0 0 1 .65-.651H8.6v-2.37a.651.651 0 0 1 .651-.65h1.504a.651.651 0 0 1 .651.65V8.6h2.367a.651.651 0 0 1 .65.651l-.002-.003Zm1.438-5.106A8.288 8.288 0 1 0 4.132 15.86 8.288 8.288 0 0 0 15.858 4.142Z"
                fill="#FA752B"
            />
        </G>
        <Defs>
            <ClipPath id="a">
                <Path fill="#fff" d="M0 0h20v20H0z" />
            </ClipPath>
        </Defs>
    </Svg>
);
