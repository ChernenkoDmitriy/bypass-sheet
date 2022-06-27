import React, { FC } from "react"
import Svg, { Path } from "react-native-svg"

interface IProps {
    width?: number;
    height?: number;
    color?: string;
};

export const LocationIcon: FC<IProps> = ({ width, height, color }) => (
    <Svg viewBox="0 0 24 24" width={width || 24} height={height || 24}  >
        <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.92 17.839a11.54 11.54 0 0 1-2.527 2.09.356.356 0 0 1-.406.014 14.256 14.256 0 0 1-3.516-3.137c-1.281-1.607-2.087-3.388-2.363-5.104-.281-1.74-.018-3.414.848-4.775a5.877 5.877 0 0 1 1.308-1.45C9.486 4.504 10.88 3.99 12.271 4c1.338.01 2.66.51 3.802 1.552.4.365.738.783 1.014 1.236.931 1.534 1.132 3.49.723 5.471-.404 1.958-1.406 3.948-2.89 5.576v.004ZM12.005 7.094a2.988 2.988 0 1 1 0 5.976 2.988 2.988 0 0 1 0-5.976Z"
            fill={color || "#999"}
        />
    </Svg>
);
