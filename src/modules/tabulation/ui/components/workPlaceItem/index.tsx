import React, { FC, useCallback, useMemo } from "react";
import { useUiContext } from "../../../../../UIProvider";
import { getStyle } from "./style";
import { Text, TouchableOpacity, View } from 'react-native'
import { observer } from "mobx-react";
import { OptionsIcon } from "../../../../../../assets/icons/optionsIcon";
import { MenuView } from "@react-native-menu/menu";
import { IWorkPlace } from "../../../../shared/entities/workPlace/IWorkPlace";
import { companyModel } from "../../../../shared/entities/company/CompanyModel";
import { workPlaceModel } from "../../../../shared/entities/workPlace/WorkPlaceModel";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { AddOfficeIcon } from "../../../../../../assets/icons/addOfficeIcon";
import { OfficeIcon } from "../../../../../../assets/icons/OfficeIcon";

interface IProps {
    workPlace: IWorkPlace;
    onDeleteWorkPLace: (id: number, company_id: number) => void;
};

export const WorkPlaceItem: FC<IProps> = observer(({ workPlace, onDeleteWorkPLace }) => {
    const { colors, t } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);
    const navigation = useNavigation<StackNavigationProp<any>>();

    const onUpdateWorkPlace = () => {
        workPlaceModel.chosenWorkPlace = workPlace;
        navigation.navigate('UpdateWorkPlaceView');
    };

    return (
        <View style={styles.container}>
            <View style={styles.avatar}>
                <OfficeIcon color={colors.icon} />
            </View>
            <View style={styles.wrapper}>
                <Text style={styles.title}>{workPlace.name}</Text>
                <Text style={styles.text}>{workPlace.address}</Text>
                <Text style={styles.text}>{'Radius' + ': ' + workPlace.radius}</Text>
            </View>
            <MenuView
                style={styles.optionsButton}
                onPressAction={({ nativeEvent }) => {
                    nativeEvent.event === '1'
                        ? onUpdateWorkPlace()
                        : onDeleteWorkPLace(workPlace.id, companyModel.chosenCompany?.id || 0)
                }}
                actions={[
                    {
                        id: '1',
                        title: t('edit'),
                        titleColor: "#000",
                    },
                    {
                        id: '2',
                        title: t('delete'),
                        titleColor: "#000",
                    },
                ]}
                shouldOpenOnLongPress={false}
            >
                <TouchableOpacity >
                    <OptionsIcon color={colors.icon} />
                </TouchableOpacity>
            </MenuView>
        </View>
    );
});