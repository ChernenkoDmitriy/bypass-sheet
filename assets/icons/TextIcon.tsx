import React, { FC } from "react"
import Svg, { Path } from "react-native-svg"

interface IProps {
    width?: number;
    height?: number;
    color?: string;
};

export const TextIcon: FC<IProps> = ({ width, height, color }) => (
    <Svg viewBox="0 0 110.36 122.88" width={width || 24} height={height || 24}  >
        <Path
            d="M110.36 0v33.28h-3.25c-1.95-7.7-4.08-13.21-6.43-16.55-2.35-3.37-5.6-6.03-9.71-8.01-2.29-1.12-6.31-1.64-12.03-1.64h-9.15v94.76c0 6.28.34 10.21 1.02 11.79.71 1.57 2.07 2.94 4.08 4.12 2.04 1.2 4.79 1.79 8.29 1.79h4.08v3.34H22.92v-3.34H27c3.56 0 6.43-.65 8.6-1.92 1.58-.84 2.82-2.29 3.71-4.36.68-1.42 1.02-5.23 1.02-11.41V7.09h-8.91c-8.26 0-14.29 1.73-18.03 5.26-5.26 4.89-8.57 11.87-9.96 20.94H0V0h110.36z"
            fill={color || '#000'}
        />
    </Svg>
);
