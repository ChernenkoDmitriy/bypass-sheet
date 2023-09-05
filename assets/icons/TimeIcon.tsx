import React, { FC } from "react"
import Svg, { Circle, G, Path } from "react-native-svg"
import { scaleVertical } from "../../src/utils/Utils";

interface IProps {
    width?: number;
    height?: number;
    color?: string;
};

export const TimeIcon: FC<IProps> = ({ width, height, color }) => (
    <Svg
        viewBox="0 0 20 20"
        width={width || scaleVertical(20)}
        height={height || scaleVertical(20)}
    >
        <G
            transform="translate(-303 -748) translate(301 746)"
            stroke={color || "#fff"}
            strokeWidth={2}
            fill="none"
            fillRule="evenodd"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <Circle cx={15.5} cy={15.5} r={5.5} />
            <Path d="M15.5 13.3440934L15.5 15.5 17 17" />
            <Path d="M17 3L17 5" />
            <Path d="M7 3L7 5" />
            <Path d="M8.03 21H5.308c-.802 0-1.093-.078-1.386-.225a1.587 1.587 0 01-.68-.637C3.083 19.864 3 19.592 3 18.841V7.159c0-.75.084-1.023.24-1.297.157-.275.388-.49.68-.637C4.215 5.078 4.506 5 5.308 5h13.386c.802 0 1.093.078 1.386.225.293.147.524.362.68.637.157.274.241 1.385.241 2.135" />
        </G>
    </Svg>
);