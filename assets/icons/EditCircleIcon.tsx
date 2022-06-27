import React, { FC } from "react"
import Svg, { Path } from "react-native-svg"

interface IProps {
    width?: number;
    height?: number;
    color?: string;
};

export const EditRoundIcon: FC<IProps> = ({ width, height, color }) => (
    <Svg viewBox="0 0 24 24" width={width || 24} height={height || 24}  >
        <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0Zm-1.734 16.406c-.356.12-.72.229-1.075.346-.355.12-.71.236-1.074.355-.847.274-1.31.428-1.412.456-.1.027-.037-.364.174-1.184l.674-2.576 5.08-5.282 2.705 2.604-5.072 5.281Zm5.062-9.797a.585.585 0 0 0-.437-.173.567.567 0 0 0-.428.19l-.965 1.003 2.705 2.613.975-1.02a.595.595 0 0 0 .164-.437.581.581 0 0 0-.182-.428L15.328 6.61Z"
            fill={color || "#FA752B"}
        />
    </Svg>
);
