import React, { FC } from "react"
import Svg, { Path } from "react-native-svg"

interface IProps {
    width?: number;
    height?: number;
    color?: string;
};

export const CommentIcon: FC<IProps> = ({ width, height, color }) => (
    <Svg viewBox="0 0 20 20" width={width || 24} height={height || 24}  >
        <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="m9.326 15.13-2.861 2.72a.454.454 0 0 1-.792-.298V15.13H4.16a1.173 1.173 0 0 1-.82-.34A1.153 1.153 0 0 1 3 13.98V5.15c.002-.305.125-.596.343-.811.217-.216.51-.338.818-.34h11.678c.308.002.602.124.82.339.216.215.34.507.341.812v8.828a1.153 1.153 0 0 1-.342.812 1.173 1.173 0 0 1-.819.339H9.326ZM6.164 8.17a.454.454 0 0 1-.43-.448.447.447 0 0 1 .43-.448h7.672a.457.457 0 0 1 .44.271.446.446 0 0 1-.26.598.457.457 0 0 1-.18.027H6.164Zm0 2.912a.455.455 0 0 1-.43-.449.447.447 0 0 1 .43-.448h6.259a.454.454 0 0 1 .43.448.447.447 0 0 1-.43.448h-6.26Z"
            fill={color || "#666"}
        />
    </Svg>
);
