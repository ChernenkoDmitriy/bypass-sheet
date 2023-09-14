import { observer } from 'mobx-react';
import React, { FC, useMemo, useState } from 'react';
import { getStyle } from './styles';
import { Calendar, CalendarProps, DateData } from 'react-native-calendars';
import { useUiContext } from '../../../../../UIProvider';
import { View, Text, ViewStyle } from 'react-native';
import { MarkedDates } from 'react-native-calendars/src/types';
import moment from 'moment';
import { ChevronIcon } from '../../../../../../assets/icons/ChevronIcon';
import { CalendarDayDetails } from '../calendarDayDetails';
import { timeSheetModel } from '../../../../../entities/timeSheet/TimeSheetModel';

interface IProps extends CalendarProps {
    title?: string;
    isHasEvents?: boolean;
    containerStyle?: ViewStyle;
};

export const UserCalendar: FC<IProps> = observer(({ title, isHasEvents = true, containerStyle, ...otherProps }) => {
    const { colors, t, theme } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);
    const [selectedDay, setSelectedDay] = useState<MarkedDates>({});
    const [daysWithEvents, setDaysWithEventsEvents] = useState<MarkedDates>({});
    const [isVisible, setIsVisible] = useState(false);

    const calendarColor = useMemo(() => ({
        backgroundColor: '#c3c3d5',
        calendarBackground: '#c3c3d5',
        todayDotColor: colors.primary,
        todayTextColor: colors.primary,
        monthTextColor: colors.text, dayTextColor: colors.text, textMonthFontFamily: 'Roboto-Regular', textDayFontFamily: 'Roboto-Regular',
    }), [theme , colors ]);

    const onSetIsVisible = () => { setIsVisible(prevState => !prevState) };

    const onDayPress = (date: DateData) => {
        if (Object.keys(selectedDay)[0] === date.dateString) {
            setSelectedDay({});
            return;
        };
        setSelectedDay({ [date.dateString]: { selected: true, selectedColor: colors.primary, selectedTextColor: colors.text } });
        const selectedDateString = moment(date.dateString).format('MM.DD.YYYY');
        const matchingTimeSheetEntries = timeSheetModel.timeSheetListUser.filter((item) => {
            const itemDateString = moment(item?.startTime).format('MM.DD.YYYY');
            return itemDateString === selectedDateString;
        })
        timeSheetModel.chosenDate = matchingTimeSheetEntries?.[0] || null;
    };

    const renderArrow = (direction: 'left' | 'right') => (<ChevronIcon width={20} height={20} color={colors.primary} position={direction.toUpperCase() as 'LEFT' | 'RIGHT'} />);

    return (
        <View style={[styles.container, containerStyle]}>
            {!!title && <Text style={styles.title}>{title}</Text>}
            <Calendar
                {...otherProps}
                markedDates={{ ...otherProps.markedDates, ...daysWithEvents, ...selectedDay }}
                style={[styles.calendar, otherProps.style]}
                renderArrow={renderArrow}
                onDayPress={otherProps?.onDayPress || onDayPress}
                theme={calendarColor}
            />
            {isHasEvents &&
                <CalendarDayDetails
                    isAlwaysVisible
                    day={Object.keys(selectedDay)[0] || ''}
                    onCreateCustomEvent={onSetIsVisible}
                    containerStyle={styles.dayEvent}
                    event={timeSheetModel.chosenDate}
                />
            }
        </View>
    )
});
