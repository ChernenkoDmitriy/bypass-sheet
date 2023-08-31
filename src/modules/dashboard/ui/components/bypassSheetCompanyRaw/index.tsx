import React, { FC, useMemo } from 'react';
import { Text, View } from 'react-native';
import { LocationIcon } from '../../../../../../assets/icons/LocationIcon';
import { useUiContext } from '../../../../../UIProvider';
import { IBypassCompany } from '../../../../shared/entities/bypassList/IBypassCompany';
import { IBypassSheet } from '../../../../shared/entities/bypassList/IBypassSheet';
import { AddBypassSheetRaw } from '../addBypassSheetRaw';
import { BypassSheetCompanyMenu } from '../bypassSheetCompanyMenu';
import { BypassSheetRaw } from '../bypassSheetRaw';
import { getStyle } from './styles';

interface IProps {
    item: IBypassCompany;
    onPress: (item: IBypassSheet) => void;
}

export const BypassSheetCompanyRaw: FC<IProps> = ({ item, onPress }) => {
    const { colors } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);

    return (
        <View style={styles.container}>
            <View style={styles.topContainer}>
                <View style={styles.titleWrapper}>
                    <Text style={styles.title} numberOfLines={2}>{item.title}</Text>
                    {item.address ? <View style={styles.location}>
                        <LocationIcon color={colors.accentColorLight} />
                        <Text style={styles.address} numberOfLines={1}>{item.address}</Text>
                    </View> : null}
                </View>
                <BypassSheetCompanyMenu item={item} />
            </View>
            {item.items?.map((bypassSheet) => <BypassSheetRaw key={`${bypassSheet.id}`} item={bypassSheet} onPress={onPress} />)}
            <AddBypassSheetRaw companyId={item.id} />
        </View>
    )
}
