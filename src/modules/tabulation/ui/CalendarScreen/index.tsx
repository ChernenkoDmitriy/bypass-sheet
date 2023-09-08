import React, { FC, useMemo, useRef } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { getStyle } from './styles';
import { useCalendar } from '../../presenters/useCalendar';
import { CalendarFooter } from '../components/calendarFooter';
import Calendar from '../../../../../libs/react-native-calendar-range-picker/src/index'
import { useUiContext } from '../../../../UIProvider';
import { ScreenContainer } from '../../../../UIKit/screenContainer';

export const CalendarScreen: FC = () => {
    const { colors, t } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);
    const { onChangeDate, isDisableButton, onSaveCustomDate, onCancel } = useCalendar();

    return (
        <ScreenContainer edges={['top']}>
            <Calendar
                onChange={onChangeDate}
                style={{
                    container: styles.container,
                    monthContainer: styles.monthContainer,
                    dayTextColor: colors.text,
                    holidayColor: colors.text,
                    monthNameText: styles.monthNameText,
                    selectedDayBackgroundColor: colors.primary,
                    selectedBetweenDayBackgroundTextColor: colors.buttonText,
                    selectedBetweenDayTextColor: colors.primary
                }}
                isMonthFirst
            />
            <CalendarFooter isDisableButton={isDisableButton} onSaveCustomDate={onSaveCustomDate} onCancel={onCancel} />
        </ScreenContainer>
    );
};
