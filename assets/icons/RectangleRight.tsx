import React, { FC } from "react";
import Svg, {
    Path,
} from "react-native-svg"
import { scaleHorizontal, scaleVertical } from "../../src/utils/Utils";

interface IProps {
    width?: number,
    height?: number,
    color?: string,
};

export const RectangleRight: FC<IProps> = ({ width, height, color }) => (
    <Svg 
    width={scaleHorizontal(width || 8)} 
    height={scaleVertical(height || 10)} 
    viewBox="0 0 8 10" 
    fill="none"
    >
        <Path
            d="M7.03783 4.22229C7.533 4.62253 7.533 5.37747 7.03783 5.77771L2.12862 9.74578C1.47468 10.2744 0.5 9.80892 0.5 8.96807L0.5 1.03193C0.5 0.191082 1.47468 -0.274355 2.12862 0.254219L7.03783 4.22229Z"
            fill={color || "#B4B5B6"}
        />
    </Svg>
);
