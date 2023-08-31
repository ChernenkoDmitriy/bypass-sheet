import React, { FC, memo, useMemo, useState } from 'react';
import { LayoutAnimation, TouchableOpacity, UIManager } from 'react-native';
import { MenuIcon } from '../../../../../../assets/icons/MenuIcon';
import { useUiContext } from '../../../../../UIProvider';
import { Menu, MenuItem } from 'react-native-material-menu';
import { getStyle } from './styles';
import { useBypassSheetList } from '../../../presenter/useBypassSheetList';
import { IBypassCompany } from '../../../../shared/entities/bypassList/IBypassCompany';

UIManager.setLayoutAnimationEnabledExperimental &&
    UIManager.setLayoutAnimationEnabledExperimental(true);

interface IProps {
    item: IBypassCompany;
}

export const BypassSheetCompanyMenu: FC<IProps> = memo(({ item }) => {
    const [visible, setVisible] = useState(false);
    const { colors, t } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);
    const { onDeleteCompany, onEditCompany } = useBypassSheetList();


    const onOpenMenu = () => {
        setVisible(true)
    }

    const onHideMenu = () => {
        setVisible(false)
    }

    const onHandleDeleteCompany = () => {
        LayoutAnimation.spring();
        onHideMenu();
        onDeleteCompany(item.id);
    }

    const onHandleEditCompany = () => {
        onHideMenu();
        onEditCompany(item);
    }

    const menuButton = useMemo(() =>
        <TouchableOpacity hitSlop={{ top: 10, left: 10, right: 10, bottom: 10 }} onPress={onOpenMenu} style={styles.container}>
            <MenuIcon color={colors.icon} />
        </TouchableOpacity>, []);

    return (
        <Menu visible={visible} anchor={menuButton} onRequestClose={onHideMenu}  >
            <MenuItem onPress={onHandleEditCompany}>{t('edit')}</MenuItem>
            <MenuItem onPress={onHandleDeleteCompany}>{t('delete')}</MenuItem>
        </Menu>
    )
})
