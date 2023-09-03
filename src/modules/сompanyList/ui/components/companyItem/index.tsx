import React, { FC, useMemo } from "react";

import { getStyle } from "./style";
import { TouchableOpacity, Text, View } from 'react-native';
import { useUiContext } from "../../../../../UIProvider";
import { OptionsIcon } from "../../../../../../assets/icons/optionsIcon";
import { MenuView } from "@react-native-menu/menu";

interface IProps {
    item: { id: number, name: string, avatar: string };
    deleteCompany: (id: number) => void;
    getEditCompany: (id: number, name: string) => void;
};

export const CompanyItem: FC<IProps> = ({ item, deleteCompany, getEditCompany }) => {
    const { colors } = useUiContext();
    const { t } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);

    return (
        <TouchableOpacity style={styles.container} >
            <View style={styles.informationWrapper}>
                <Text style={styles.text}>{item.name}</Text>
                <Text style={styles.text}>{item.id} {t('employees')}</Text>
            </View>
            <MenuView
                style={styles.optionsButton}
                onPressAction={({ nativeEvent }) => {
                    nativeEvent.event === '2' ? deleteCompany(item.id) : getEditCompany(item.id, item.name);
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
                <OptionsIcon color={colors.buttonText} />
            </MenuView>
        </TouchableOpacity>
    );
};