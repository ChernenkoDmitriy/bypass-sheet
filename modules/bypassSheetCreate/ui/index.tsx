import { observer } from 'mobx-react';
import React, { FC, useCallback, useMemo } from 'react';
import { useUiContext } from '../../../src/UIProvider';
import { HeaderWithBackButton } from '../../shared/ui/headerWithBackButton';
import { ScreenContainer } from '../../shared/ui/screenContainer';
import { getStyle } from './styles';
import { BypassSheetCreatingRow } from './components/bypassSheetCreatingRow';
import { IBypassItem } from '../../shared/entities/bypassList/IBypassItem';
import { useCreateBypassSheet } from '../presenters/useCreateBypassSheet';
import { FlatList } from 'react-native-gesture-handler';
import { BypassItemCreator } from '../../companyList/ui/components/bypassItemCreator';
import { BypassListTop } from './components/bypassListTop';
import { MainButton } from '../../shared/ui/mainButton';
import { BypassTitle } from './components/bypassTitle';

export const BypassSheetCreateView: FC = observer(() => {
    const { colors, t } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);
    const { scroll, bypassSheetItems, title, address, bypassList, setAddress, setTitle, onDelete,
        onAddBypassItem, onDeleteBypassItem, onChangeTitle, onCreate } = useCreateBypassSheet();

    const keyExtractor = useCallback((item: IBypassItem) => `${item.id}`, []);

    const renderItem = useCallback(({ item }: { item: IBypassItem, index: number }) =>
        <BypassSheetCreatingRow onDeleteItem={onDeleteBypassItem} onChangeText={onChangeTitle} value={item.title} id={item.id} />
        , []);

    return (
        <ScreenContainer>
            <HeaderWithBackButton title={t(bypassList ? 'editObject' : 'newObject')} />
            <BypassTitle isEditable={!!bypassList} onPress={onDelete} />
            <BypassListTop {...{ title, setTitle, address, setAddress }} />
            <BypassItemCreator title={t('criterialObject')} buttonText={t('addItem')} onPress={onAddBypassItem} />
            <FlatList
                ref={ref => scroll.current = ref}
                style={styles.scroll}
                contentContainerStyle={styles.contentContainerStyle}
                keyExtractor={keyExtractor}
                data={bypassSheetItems}
                renderItem={renderItem}
            />
            <MainButton title={t(bypassList ? 'update' : 'create')} onPress={onCreate} containerStyle={styles.button} />
        </ScreenContainer>
    )
})
