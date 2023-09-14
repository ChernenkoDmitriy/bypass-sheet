import React, { FC, memo, useMemo } from 'react';
import { getStyle } from './styles';
import { useUiContext } from '../../../../../UIProvider';
import { View, Text, ViewStyle } from 'react-native';
import moment from 'moment';
import { ITimeSheet } from '../../../../shared/entities/timeSheet/ITimeSheet';

interface IProps {
    event: ITimeSheet | null;
    day: string;
    isAlwaysVisible?: boolean;
    onCreateCustomEvent: () => void;
    containerStyle?: ViewStyle;
};

export const CalendarDayDetails: FC<IProps> = memo(({ day, event, isAlwaysVisible = false, containerStyle }) => {
    const { colors, t } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);
    const date = useMemo(() => moment(day).format('DD.MM.YYYY'), [day]);

    const startTime = useMemo(() => {
        if (event?.startTime === undefined) {
            return ''
        } else if (event?.startTime) {
            return t('start') + ' : ' + moment(event?.startTime || 0).format('HH:mm');
        }
    }, [event?.startTime]);

    const endTime = useMemo(() => {
        if (event?.endTime === undefined) {
            return t('noneData')
        } else if (event?.startTime) {
            return t('end') + ' : ' + moment(event?.endTime || 0).format('HH:mm');
        }
    }, [event?.endTime]);

    return (
        <View style={[styles.container, containerStyle]}>
            <Text style={styles.title}>{day ? date : null}</Text>
            <Text style={styles.text}>{day && startTime ?  startTime : null}</Text>
            <Text style={styles.text}>{day && endTime ?  endTime : null}</Text>
        </View>

    );
});