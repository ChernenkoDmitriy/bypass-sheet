import React, { FC } from "react"
import Svg, { Path } from "react-native-svg"

interface IProps {
    width?: number;
    height?: number;
    color?: string;
};

export const DeleteCircleIcon: FC<IProps> = ({ width, height, color }) => (
    <Svg viewBox="0 0 20 20" width={width || 24} height={height || 24}  >
        <Path
            d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0Zm3.382 11.836a1.093 1.093 0 1 1-1.546 1.546L10 11.546l-1.836 1.836a1.09 1.09 0 0 1-1.545 0 1.093 1.093 0 0 1 0-1.546L8.454 10 6.62 8.164a1.093 1.093 0 1 1 1.545-1.546L10 8.454l1.836-1.836a1.093 1.093 0 1 1 1.546 1.546L11.546 10l1.836 1.836Z"
            fill={color || "#999"}
        />
    </Svg>
);
