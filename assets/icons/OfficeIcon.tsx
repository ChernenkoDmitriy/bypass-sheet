import React, { FC } from "react"
import Svg, { Path } from "react-native-svg"
import { scaleVertical } from "../../src/utils/Utils";

export const OfficeIcon: FC<{ height?: number; width?: number; color?: string }> = ({ height, width, color }) => (
    <Svg height={height || scaleVertical(70)} viewBox="0 0 24 24" width={width || scaleVertical(70)} 
    >
        <Path d="M21 8h-5V3a1 1 0 00-1-1H9a1 1 0 00-1 1v5H3a1 1 0 00-1 1v13h9v-3a1 1 0 012 0v3h9V9a1 1 0 00-1-1zM6 20H4v-2h2zm0-4H4v-2h2zm0-4H4v-2h2zm7 3h-2v-2h2zm0-4h-2V9h2zm0-4h-2V5h2zm7 13h-2v-2h2zm0-4h-2v-2h2zm0-4h-2v-2h2z" fill={color} />
    </Svg>
)
