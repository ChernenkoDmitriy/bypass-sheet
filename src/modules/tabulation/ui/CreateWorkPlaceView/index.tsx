import React, { FC, useMemo } from "react";
import { useUiContext } from "../../../../UIProvider";
import { ScreenContainer } from "../../../../UIKit/screenContainer";
import { getStyle } from "./style";
import { DashboardHeader } from "../../../dashboard/ui/components/dashboardHeader";
import { observer } from "mobx-react";
import { Text, TouchableOpacity, View } from "react-native";
import { GeolocationIcon } from "../../../../../assets/icons/GeolocationIcon";
import { MainInput } from "../../../../UIKit/mainInput";
import { UseWorkPlace } from "../../presenters/useWorkPlace";
import { workPlaceModel } from "../../../../entities/workPlace/WorkPlaceModel";

export const CreateWorkPlaceView: FC = observer(() => {
    const { colors, t } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);
    const { name, isValidName, errorName, address, isValidAddress, errorAddress, radius, isValid, errorRadius, onAddress, onBlurAddress, onBlurName, onName, openMap, onBlur, onSetRadius, onContinue, } = UseWorkPlace();

    return (
        <ScreenContainer edges={['bottom']} containerStyle={styles.container} headerComponent={<DashboardHeader title={t('addAddress')} isBackAvailable={true} onCreate={onContinue} create />}>
            <MainInput
                inputWrapperStyle={{ borderBottomColor: isValidName ? colors.primary : 'red' }}
                value={name}
                maxLength={20}
                onChangeText={onName}
                keyboardType={'default'}
                isValid={isValidName}
                onBlur={onBlurName}
                errorText={errorName}
                title={t('name')}
            />
            <MainInput
                inputWrapperStyle={{ borderBottomColor: isValidAddress ? colors.primary : 'red' }}
                value={address}
                maxLength={20}
                onChangeText={onAddress}
                keyboardType={'default'}
                isValid={isValidAddress}
                onBlur={onBlurAddress}
                errorText={errorAddress}
                title={t('address')}
            />
            <MainInput
                inputWrapperStyle={{ borderBottomColor: isValid ? colors.primary : 'red' }}
                value={radius}
                maxLength={4}
                onChangeText={onSetRadius}
                keyboardType={'phone-pad'}
                isValid={isValid}
                onBlur={onBlur}
                errorText={errorRadius}
                title="Radius(m)"
            />
            <TouchableOpacity style={styles.button} onPress={openMap}>
                <GeolocationIcon color={colors.icon} />
                <Text style={styles.text}>{t('addAddress')}</Text>
            </TouchableOpacity>
            {!workPlaceModel.latitude
                ? <Text style={styles.title}>{t('selectLocationWorkPlace')}</Text>
                : <Text style={styles.text}>{workPlaceModel.latitude + ' --- ' + workPlaceModel.longitude}</Text>
            }
        </ScreenContainer>
    );
});