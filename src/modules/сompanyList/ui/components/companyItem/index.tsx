import React, { FC, useMemo } from "react";

import { getStyle } from "./style";
import { TouchableOpacity, Text, View } from 'react-native';
import { useUiContext } from "../../../../../UIProvider";
import { OptionsIcon } from "../../../../../../assets/icons/optionsIcon";
import { MenuView } from "@react-native-menu/menu";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

interface IProps {
    item: { id: number, name: string, avatar: string };
    deleteCompany: (id: number) => void;
    onEditCompany: (id: number, name: string) => void;
};

export const CompanyItem: FC<IProps> = ({ item, deleteCompany, onEditCompany }) => {
    const { colors } = useUiContext();
    const { t } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);
    const navigation = useNavigation<StackNavigationProp<any>>();

    const onPress = () => {
        navigation.reset({
            index: 0,
            routes: [{ name: 'TabNavigator' }],
        });
    };

    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <View style={styles.informationWrapper}>
                <Text style={styles.text}>{item.name}</Text>
                <Text style={styles.text}>{item.id} {t('employees')}</Text>
            </View>
            <MenuView
                style={styles.optionsButton}
                onPressAction={({ nativeEvent }) => {
                    nativeEvent.event === '2' ? deleteCompany(item.id) : onEditCompany(item.id, item.name);
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