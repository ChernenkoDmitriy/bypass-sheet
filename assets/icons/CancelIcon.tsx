import React, { FC } from "react"
import Svg, { Path } from "react-native-svg"

export const CancelIcon: FC<{ height?: number; width?: number; color?: string }> = ({ height, width, color }) => (
    <Svg height={height || 24} viewBox="0 0 64 64" width={width || 24} stroke="red"       strokeWidth={3}
    >
        <Path d="M8.06 8.06L55.41 55.94" />
        <Path d="M55.94 8.06L8.59 55.94" />
    </Svg>
)
