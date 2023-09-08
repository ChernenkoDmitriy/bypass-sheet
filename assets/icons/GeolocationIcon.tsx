import React, { FC } from "react"
import Svg, { Path } from "react-native-svg"

export const GeolocationIcon: FC<{ height?: number; width?: number; color?: string }> = ({ height, width, color }) => (
    <Svg height={height || 24} viewBox="0 0 24 24" width={width || 24}>
        <Path d="M12 24l-.6-.4C11 23.3 2 17.2 2 10 2 4.5 6.5 0 12 0s10 4.5 10 10c0 7.2-9 13.3-9.4 13.6l-.6.4zm0-22c-4.4 0-8 3.6-8 8 0 5.2 6.1 10.1 8 11.6 1.9-1.5 8-6.4 8-11.6 0-4.4-3.6-8-8-8zm0 12c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" fill={color} />
    </Svg>
)
