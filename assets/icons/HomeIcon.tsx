import React, { FC } from "react";
import Svg, { Path } from "react-native-svg";
import { scaleHorizontal, scaleVertical } from "../../src/utils/Utils";

interface IProps {
    width?: number,
    height?: number,
    color?: string,
}

export const HomeIcon: FC<IProps> = ({ width, height, color }) => (
    <Svg width={scaleHorizontal(width || scaleVertical(20))} height={scaleVertical(height || scaleVertical(20))} viewBox="0 0 20 20">
        <Path
            d="M0.388944 7.15568C0.143653 7.34503 0 7.63739 0 7.94726V18.9999C0 19.5522 0.447715 19.9999 1 19.9999H7V12.3156C7 11.7633 7.44772 11.3156 8 11.3156H12C12.5523 11.3156 13 11.7633 13 12.3156V19.9999H19C19.5523 19.9999 20 19.5522 20 18.9999V7.94726C20 7.63739 19.8563 7.34503 19.6111 7.15568L10.6111 0.208237C10.2511 -0.0696463 9.74893 -0.0696463 9.38894 0.208237L0.388944 7.15568Z"
            fill={color}
        />
    </Svg>
);