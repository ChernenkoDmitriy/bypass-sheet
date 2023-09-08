import React, { FC } from "react";
import Svg, { Path } from "react-native-svg";
import { scaleVertical } from "../../src/utils/Utils";

interface IProps {
    width?: number,
    height?: number,
    color?: string,
};

export const CalendarIcon: FC<IProps> = ({ width, height, color }) => (
    <Svg 
    width={scaleVertical(width || 40)} 
    height={scaleVertical(height || 40)} 
    viewBox="0 0 20 20" fill="none"
    >
        <Path d="M15.8333 2.33341H15V0.666748H13.3333V2.33341H6.66667V0.666748H5V2.33341H4.16667C3.24167 2.33341 2.50833 3.08341 2.50833 4.00008L2.5 15.6667C2.5 16.5834 3.24167 17.3334 4.16667 17.3334H15.8333C16.75 17.3334 17.5 16.5834 17.5 15.6667V4.00008C17.5 3.08341 16.75 2.33341 15.8333 2.33341ZM15.8333 15.6667H4.16667V7.33342H15.8333V15.6667ZM15.8333 5.66675H4.16667V4.00008H15.8333V5.66675ZM7.5 9.83342C7.5 10.2937 7.1269 10.6667 6.66667 10.6667C6.20643 10.6667 5.83333 10.2937 5.83333 9.83342C5.83333 9.37318 6.20643 9.00008 6.66667 9.00008C7.1269 9.00008 7.5 9.37318 7.5 9.83342ZM10.8333 9.83342C10.8333 10.2937 10.4602 10.6667 10 10.6667C9.53976 10.6667 9.16667 10.2937 9.16667 9.83342C9.16667 9.37318 9.53976 9.00008 10 9.00008C10.4602 9.00008 10.8333 9.37318 10.8333 9.83342ZM14.1667 9.83342C14.1667 10.2937 13.7936 10.6667 13.3333 10.6667C12.8731 10.6667 12.5 10.2937 12.5 9.83342C12.5 9.37318 12.8731 9.00008 13.3333 9.00008C13.7936 9.00008 14.1667 9.37318 14.1667 9.83342ZM7.5 13.1667C7.5 13.627 7.1269 14.0001 6.66667 14.0001C6.20643 14.0001 5.83333 13.627 5.83333 13.1667C5.83333 12.7065 6.20643 12.3334 6.66667 12.3334C7.1269 12.3334 7.5 12.7065 7.5 13.1667ZM10.8333 13.1667C10.8333 13.627 10.4602 14.0001 10 14.0001C9.53976 14.0001 9.16667 13.627 9.16667 13.1667C9.16667 12.7065 9.53976 12.3334 10 12.3334C10.4602 12.3334 10.8333 12.7065 10.8333 13.1667ZM14.1667 13.1667C14.1667 13.627 13.7936 14.0001 13.3333 14.0001C12.8731 14.0001 12.5 13.627 12.5 13.1667C12.5 12.7065 12.8731 12.3334 13.3333 12.3334C13.7936 12.3334 14.1667 12.7065 14.1667 13.1667Z"
            fill={color || "#0082FF"} />
    </Svg>

);