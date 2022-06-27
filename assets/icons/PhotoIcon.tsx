import React, { FC } from "react"
import Svg, { Path } from "react-native-svg"

interface IProps {
    width?: number;
    height?: number;
    color?: string;
};

export const PhotoIcon: FC<IProps> = ({ width, height, color }) => (
    <Svg viewBox="0 0 20 20" width={width || 24} height={height || 24}  >
        <Path
            d="M10 8.25a2.34 2.34 0 0 0-2.333 2.333A2.34 2.34 0 0 0 10 12.917a2.34 2.34 0 0 0 2.333-2.334A2.34 2.34 0 0 0 10 8.25Z"
            fill={color || "#666"}
        />
        <Path
            d="M15.833 6.5h-1.516c-.409 0-.759-.204-.992-.525l-.67-1.02c-.205-.497-.7-.788-1.226-.788H8.571a1.38 1.38 0 0 0-1.254.787l-.671 1.021c-.204.32-.583.525-.992.525H4.167A1.17 1.17 0 0 0 3 7.667v7a1.17 1.17 0 0 0 1.167 1.166h11.666A1.17 1.17 0 0 0 17 14.667v-7A1.17 1.17 0 0 0 15.833 6.5ZM10 14.083a3.51 3.51 0 0 1-3.5-3.5 3.51 3.51 0 0 1 3.5-3.5 3.51 3.51 0 0 1 3.5 3.5 3.51 3.51 0 0 1-3.5 3.5Z"
            fill={color || "#666"}
        />
    </Svg>
);
