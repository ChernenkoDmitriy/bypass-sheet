import React, { FC, useCallback, useMemo } from "react";

import { getStyle } from "./style";
import { TouchableOpacity, Text, View } from 'react-native';
import { useUiContext } from "../../../../../UIProvider";
import { OptionsIcon } from "../../../../../../assets/icons/optionsIcon";
import { MenuView } from "@react-native-menu/menu";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { ICompany } from "../../../../shared/entities/company/ICompany";

interface IProps {
    companyItem: ICompany;
    deleteCompany: (id: number) => void;
    onEditCompany: (id: number, name: string) => void;
    onPress: (companyItem: ICompany) => void;
};

export const CompanyItem: FC<IProps> = ({ companyItem, deleteCompany, onEditCompany,onPress }) => {
    const { colors } = useUiContext();
    const { t } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);
    const navigation = useNavigation<StackNavigationProp<any>>();

    const onHandlePress = useCallback(() => {
        onPress(companyItem);
    }, [companyItem]);

    return (
        <TouchableOpacity style={styles.container} onPress={onHandlePress}>
            <View style={styles.informationWrapper}>
                <Text style={styles.text}>{companyItem.name}</Text>
                <Text style={styles.text}>{companyItem.id} {t('employees')}</Text>
            </View>
            <MenuView
                style={styles.optionsButton}
                onPressAction={({ nativeEvent }) => {
                    nativeEvent.event === '2' ? deleteCompany(companyItem.id) : onEditCompany(companyItem.id, companyItem.name);
                }}
                actions={[
                    {
                        id: '1',
                        title: t('edit'),
                        titleColor: colors.text,
                    },
                    {
                        id: '2',
                        title: t('delete'),
                        titleColor: colors.text,
                    },
                ]}
                shouldOpenOnLongPress={false}
            >
                <TouchableOpacity>
                    <OptionsIcon color={colors.buttonText} />
                </TouchableOpacity>
            </MenuView>
        </TouchableOpacity>
    );
};