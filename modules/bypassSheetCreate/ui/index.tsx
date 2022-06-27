import { observer } from 'mobx-react';
import React, { FC, useCallback, useMemo } from 'react';
import { useUiContext } from '../../../src/UIProvider';
import { HeaderWithBackButton } from '../../shared/ui/headerWithBackButton';
import { ScreenContainer } from '../../shared/ui/screenContainer';
import { getStyle } from './styles';
import { BypassSheetCreatingRow } from './components/bypassSheetCreatingRow';
import { IBypassItem } from '../../shared/entities/bypassList/IBypassItem';
import { useCreateBypassSheet } from '../presenters/useCreateBypassSheet';
import { TitleBypassSheet } from './components/titleBypassSheet';
import { FlatList } from 'react-native-gesture-handler';
import { RightToolBarButton } from '../../shared/ui/rightToolBarButton';
import { BypassTopList } from '../../companyList/ui/components/bypassTopList';

export const BypassSheetCreateView: FC = observer(() => {
    const { colors, t } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);
    const { scroll, bypassSheetItems, title, setTitle, onAddBypassItem, onDeleteBypassItem, onChangeTitle, onCreate } = useCreateBypassSheet();

    const keyExtractor = useCallback((item: IBypassItem) => `${item.id}`, []);

    const renderItem = useCallback(({ item }: { item: IBypassItem, index: number }) =>
        <BypassSheetCreatingRow onDeleteItem={onDeleteBypassItem} onChangeText={onChangeTitle} value={item.title} id={item.id} />
        , []);

    return (
        <ScreenContainer>
            <HeaderWithBackButton title={t('createBypassSheet')} >
                <RightToolBarButton title={t(false ? 'update' : 'create')} onPress={onCreate} disabled={!title?.trim()} />
            </HeaderWithBackButton>
            <BypassTopList title={t('objectOfAssessment')} buttonText={t('addItem')} onPress={onAddBypassItem} />
            <FlatList
                ref={ref => scroll.current = ref}
                ListHeaderComponent={<TitleBypassSheet value={title} onChangeText={setTitle} />}
                style={styles.scroll}
                contentContainerStyle={styles.contentContainerStyle}
                keyExtractor={keyExtractor}
                data={bypassSheetItems}
                renderItem={renderItem}
            />
        </ScreenContainer>
    )
})
