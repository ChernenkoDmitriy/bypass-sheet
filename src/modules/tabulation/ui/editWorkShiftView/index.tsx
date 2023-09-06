import React, { FC, useCallback, useMemo, useState } from "react";
import { useUiContext } from "../../../../UIProvider";
import { ScreenContainer } from "../../../../UIKit/screenContainer";
import { getStyle } from "./style";
import { DashboardHeader } from "../../../dashboard/ui/components/dashboardHeader";
import { useCreateWorkShift } from "../../presenters/useCreateWorkShift";
import { MainInput } from "../../../../UIKit/mainInput";
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { TouchableOpacity, Text } from "react-native";
import { MainButton } from "../../../../UIKit/mainButton";
import { scaleVertical } from "../../../../utils/Utils";
import { useEditWorkShift } from "../../presenters/useEditWorkShift";

export const EditWorkShiftView: FC = () => {
    const { colors, t } = useUiContext();
    const { id, startTime, endTime, name, isTimePickerVisibleEnd, isValid, selectedTimeStart, selectTime, selectedTimeEnd, companyName, errorName, isTimePickerVisibleStart, handleConfirm, hideTimePickerStart,
        showTimePickerStart, hideTimePicker, showTimePicker, handleConfirmStart, onSetName, onBlur, onEdit } = useEditWorkShift();
    const styles = useMemo(() => getStyle(colors, selectTime), [colors, selectTime]);

    return (
        <ScreenContainer edges={['bottom']} containerStyle={styles.container} headerComponent={<DashboardHeader title={t('editWorkShift')} isBackAvailable={true} />}>
            <MainInput
                containerStyle={{ marginTop: 20 }}
                inputWrapperStyle={{ borderBottomColor: isValid ? colors.primary : 'red' }}
                title={t('newName')}
                value={companyName}
                maxLength={50}
                onChangeText={onSetName}
                keyboardType={'default'}
                isValid={isValid}
                onBlur={onBlur}
                errorText={errorName}
            />
            <TouchableOpacity style={styles.timeButton} onPress={showTimePickerStart}>
                <Text style={styles.text}>{t('timeStart') + ' : '}</Text>
                <Text style={styles.text}>{selectedTimeStart || startTime}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.timeButton} onPress={showTimePicker}>
                <Text style={styles.text}>{t('timeEnd') + ' : '}</Text>
                <Text style={styles.text}>{selectedTimeEnd || endTime}</Text>
            </TouchableOpacity>
            <DateTimePickerModal
                isVisible={isTimePickerVisibleEnd}
                mode="time"
                locale="en_GB"
                onConfirm={handleConfirm}
                onCancel={hideTimePicker}
            />
            <DateTimePickerModal
                isVisible={isTimePickerVisibleStart}
                mode="time"
                locale="en_GB"
                onConfirm={handleConfirmStart}
                onCancel={hideTimePickerStart}
            />
            <MainButton containerStyle={{ marginTop: scaleVertical(100) }} title={t('edit')} onPress={onEdit} />
            {!selectTime
                ? <Text style={[styles.title]}>{t('timeInputError')}</Text>
                : null
            }
        </ScreenContainer>
    );
};