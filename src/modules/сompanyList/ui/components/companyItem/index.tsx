import React, { FC, useCallback, useMemo } from "react";
import { getStyle } from "./style";
import { TouchableOpacity, Text, View } from 'react-native';
import { useUiContext } from "../../../../../UIProvider";
import { OptionsIcon } from "../../../../../../assets/icons/optionsIcon";
import { MenuView } from "@react-native-menu/menu";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { ICompany } from "../../../../shared/entities/company/ICompany";
import { InviteIcon } from "../../../../../../assets/icons/InviteIcon";

interface IProps {
    companyItem: ICompany;
    deleteCompany: (id: number) => void;
    onEditCompany: (id: number, name: string) => void;
    onPress: (companyItem: ICompany) => void;
    acceptInvite: (company_id: number, isInvite: boolean) => void;
};

export const CompanyItem: FC<IProps> = ({ companyItem, deleteCompany, onEditCompany, onPress, acceptInvite }) => {
    const { colors } = useUiContext();
    const { t } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);
    const isInvite = useMemo(() => companyItem.settings[0].role === null && companyItem.settings[0].status === "pending", [companyItem.settings[0].role, companyItem.settings[0].status === "pending"]);
    const isAdmin = useMemo(() => companyItem.settings[0].role === 'admin', [companyItem.settings[0].role]);

    const onHandlePress = useCallback(() => {
        onPress(companyItem);
    }, [companyItem]);

    return (
        <TouchableOpacity style={styles.container} onPress={onHandlePress}>
            <View style={styles.informationWrapper}>
                <Text style={styles.text}>{companyItem.name}</Text>
                <Text style={styles.text}>{isAdmin ?   t('isAdmin') :  ''}</Text>
                {isInvite
                    ? <View style={styles.inviteWrapper}>
                        <Text style={styles.text}>{t('invite')}</Text>
                        <View style={styles.buttonWrapper}>
                            <TouchableOpacity style={[styles.inviteButton, { backgroundColor: 'green' }]} onPress={() => acceptInvite(companyItem.id, true)}>
                                <Text style={styles.textButton}>{t('accept')}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.inviteButton, { backgroundColor: 'red' }]} onPress={() => acceptInvite(companyItem.id, false)}>
                                <Text style={styles.textButton}>{t('reject')}</Text>
                            </TouchableOpacity>
                            <InviteIcon />
                        </View>
                    </View>
                    : null
                }
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
                        titleColor: '#000',
                    },
                    {
                        id: '2',
                        title: t('delete'),
                        titleColor: '#000',
                    },
                ]}
                shouldOpenOnLongPress={false}
            >
                {isAdmin
                    ? <TouchableOpacity>
                        <OptionsIcon color={colors.icon} />
                    </TouchableOpacity>
                    : null
                }

            </MenuView>
        </TouchableOpacity>
    );
};