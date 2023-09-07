import React, { FC } from "react"
import Svg, { Path } from "react-native-svg"
import { scaleVertical } from "../../src/utils/Utils";

export const AddOfficeIcon: FC<{ height?: number; width?: number; color?: string }> = ({ height, width, color }) => (
    <Svg height={height || scaleVertical(32)} viewBox="0 0 24 24" width={width || scaleVertical(32)} fill='none'
    >
        <Path
            d="M12 6h.01M9 20l-6-3V4l2 1m4 15l6-3m-6 3v-6m6 3l6 3V7l-2-1m-4 11v-3m0-7.8c0 1.767-1.5 3.2-3 4.8-1.5-1.6-3-3.033-3-4.8S10.343 3 12 3s3 1.433 3 3.2z"
            stroke={color || "#000"}
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
)
