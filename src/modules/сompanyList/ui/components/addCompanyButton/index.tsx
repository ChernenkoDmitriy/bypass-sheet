import React, { FC, useMemo } from "react";
import { getStyle } from "./style";
import { Platform, TouchableOpacity, View } from 'react-native';
import { useUiContext } from "../../../../../UIProvider";
import { PlusIcon } from "../../../../../../assets/icons/PlusIcon";
import { scaleVertical } from "../../../../../utils/Utils";
import { MenuView } from "@react-native-menu/menu";

interface IProps {
};

export const AddCompanyButton: FC<IProps> = () => {
    const { colors, t } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);

    return (
        <MenuView
            style={styles.container}
            onPressAction={({ nativeEvent }) => {
                console.warn(JSON.stringify(nativeEvent));
            }}
            actions={[
                {
                    id: '1',
                    title: t('connectToCompany'),
                    titleColor: colors.text,
                },
                {
                    id: '2',
                    title: t('createCompany'),
                    titleColor: colors.text,
                },
            ]}
            shouldOpenOnLongPress={false}
        >
            <PlusIcon width={scaleVertical(25)} height={scaleVertical(25)} color={colors.primary} />
        </MenuView>
    );
};