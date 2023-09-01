import React, { FC } from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

interface IProps {
    width?: number,
    height?: number,
    color?: string,
};

export const SunIcon: FC<IProps> = ({ width, height, color }) => (
    <Svg width={width || 26} height={height || 26} viewBox="0 0 24 24" fill={'none'}>
        <Path
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            stroke="#000"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill={'#fff'}
        />
        <Path
            d="M7.643 5.189l-.076.916c-.04.48-.06.72-.163.907a1 1 0 01-.392.392c-.188.103-.427.123-.907.163l-.916.076c-1.026.086-1.54.129-1.793.363a1 1 0 00-.318.796c.022.344.364.73 1.048 1.499l.566.636c.334.376.501.564.564.777a1 1 0 010 .573c-.063.212-.23.4-.564.776l-.566.636c-.684.77-1.026 1.155-1.048 1.5a1 1 0 00.318.795c.253.234.767.277 1.793.363l.916.076c.48.04.72.06.907.163a1 1 0 01.392.392c.103.188.123.427.163.907l.076.916c.086 1.026.129 1.54.363 1.793a1 1 0 00.796.318c.344-.021.73-.364 1.499-1.048l.636-.566c.376-.334.564-.5.777-.564a.999.999 0 01.573 0c.212.063.4.23.776.564l.636.566c.77.684 1.155 1.027 1.5 1.048a1 1 0 00.795-.318c.234-.253.277-.767.363-1.793l.076-.916c.04-.48.06-.72.163-.907a1 1 0 01.392-.392c.188-.103.427-.123.907-.163l.916-.076c1.026-.086 1.54-.129 1.793-.363a1 1 0 00.318-.796c-.021-.344-.364-.729-1.048-1.499l-.566-.636c-.334-.376-.5-.564-.564-.776a.999.999 0 010-.574c.063-.212.23-.4.564-.776l.566-.636c.684-.77 1.027-1.155 1.048-1.5a1 1 0 00-.318-.795c-.253-.234-.767-.277-1.793-.363l-.916-.076c-.48-.04-.72-.06-.907-.163a1 1 0 01-.392-.392c-.103-.188-.123-.427-.163-.907l-.076-.916c-.086-1.026-.129-1.54-.363-1.793a1 1 0 00-.796-.318c-.344.022-.729.364-1.499 1.048l-.636.566c-.376.334-.564.501-.776.564a1 1 0 01-.574 0c-.212-.063-.4-.23-.776-.564l-.636-.566C9.53 3.442 9.146 3.1 8.8 3.078a1 1 0 00-.795.318c-.234.253-.277.767-.363 1.793z"
            stroke="#000"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
);