import React, { FC } from "react";
import Svg, { Path, Circle } from "react-native-svg";
import { scaleVertical } from "../../src/utils/Utils";

interface IProps {
    width?: number,
    height?: number,
    color?: string,
}

export const ThemeIcon: FC<IProps> = ({ width, height, color }) => (
    <Svg width={width || scaleVertical(24)} height={height || scaleVertical(24)} viewBox="0 0 24 24">
        <Circle cx={12} cy={12} r={4} fill={color || "#010101"} />
        <Path
            d="M11.4 7a.6.6 0 1 0 1.2 0h-1.2Zm1.2-3a.6.6 0 1 0-1.2 0h1.2Zm0 3V4h-1.2v3h1.2ZM11.4 20a.6.6 0 1 0 1.2 0h-1.2Zm1.2-3a.6.6 0 0 0-1.2 0h1.2Zm0 3v-3h-1.2v3h1.2ZM7 12.6a.6.6 0 1 0 0-1.2v1.2Zm-3-1.2a.6.6 0 0 0 0 1.2v-1.2Zm3 0H4v1.2h3v-1.2ZM20 12.6a.6.6 0 1 0 0-1.2v1.2Zm-3-1.2a.6.6 0 0 0 0 1.2v-1.2Zm3 0h-3v1.2h3v-1.2ZM15.12 8.049a.588.588 0 1 0 .832.83l-.832-.83Zm2.245-.583a.588.588 0 1 0-.83-.83l.83.83ZM15.952 8.88l1.413-1.414-.83-.83-1.415 1.413.832.83ZM6.635 16.534a.588.588 0 1 0 .831.831l-.83-.831Zm2.245-.583a.588.588 0 0 0-.831-.83l.83.83Zm-1.414 1.414 1.414-1.414-.831-.83-1.414 1.413.831.831ZM15.121 15.951a.588.588 0 1 1 .831-.83l-.831.83Zm2.245.583a.588.588 0 0 1-.831.83l.83-.83Zm-1.414-1.414 1.414 1.414-.831.83-1.414-1.413.831-.83ZM6.635 7.466a.588.588 0 0 1 .831-.83l-.83.83Zm2.245.583a.588.588 0 0 1-.831.83l.83-.83ZM7.466 6.635 8.88 8.05l-.831.83-1.414-1.413.831-.83Z"
            fill={color || "#010101"}
        />
        <Path stroke={color || "#010101"} strokeOpacity={0.01} d="M.5.5h23v23H.5z" />
    </Svg>
);
