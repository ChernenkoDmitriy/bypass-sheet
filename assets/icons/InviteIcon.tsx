import React, { FC } from 'react';
import { View } from 'react-native';
import Svg, { G, Path } from 'react-native-svg';
import { scaleVertical } from '../../src/utils/Utils';

interface IProps {
    width?: number;
    height?: number;
    color?: string;
}

export const InviteIcon: FC<IProps> = ({ width, height, color }) => {
    return (
        <Svg
          width={width || scaleVertical(32)}
          height={height || scaleVertical(32)}
          viewBox="0 0 48 48"
        >
          <Path
            fill="#78909C"
            d="M40 41H8c-2.2 0-4-1.8-4-4V16.1c0-1.3.6-2.5 1.7-3.3L24 0l18.3 12.8c1.1.7 1.7 2 1.7 3.3V37c0 2.2-1.8 4-4 4z"
          />
          <Path fill="#fff" d="M12 11H36V33H12z" />
          <Path
            fill="#CFD8DC"
            d="M40 41H8c-2.2 0-4-1.8-4-4V17l20 13 20-13v20c0 2.2-1.8 4-4 4z"
          />
          <G fill="#4CAF50">
            <Path d="M22 14H26V26H22z" />
            <Path d="M18 18H30V22H18z" />
          </G>
        </Svg>
      )
    };
