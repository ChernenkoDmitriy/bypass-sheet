import React, { FC } from "react"
import Svg, { Path } from "react-native-svg"

interface IProps {
    width?: number;
    height?: number;
    color?: string;
};

export const ClosedEyeIcon: FC<IProps> = ({ width, height, color }) => (
    <Svg
        width={width || 25}
        height={height || 25}
        viewBox="0 0 22 22"
        fill="none"
    >
        <Path
            d="M19.25 11c-1.6 3.278-4.695 5.5-8.25 5.5m0 0c-3.555 0-6.65-2.222-8.25-5.5M11 16.5v2.75m6.803-6.03l1.905 1.905m-4.83.43l1.164 2.32M4.197 13.22l-1.905 1.905m4.83.43l-1.164 2.32"
            stroke={color || "#5EB160"}
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
);