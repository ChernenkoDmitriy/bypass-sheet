import { observer } from 'mobx-react';
import React, { FC, useCallback, useMemo } from 'react';
import { FlatList } from 'react-native';
import { useUiContext } from '../../../src/UIProvider';
import { HeaderWithBackButton } from '../../shared/ui/headerWithBackButton';
import { ScreenContainer } from '../../shared/ui/screenContainer';
import { getStyle } from './styles';
import { BypassSheetCreatingRow } from './components/bypassSheetCreatingRow';
import { IBypassItem } from '../../shared/entities/bypassList/IBypassItem';
import { useCreateBypassSheet } from '../presenters/useCreateBypassSheet';
import { MainButton } from '../../shared/ui/mainButton';
import { TitleBypassSheet } from './components/titleBypassSheet';

export const BypassSheetCreateView: FC = observer(() => {
    const { colors, t } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);
    const { bypassSheetItems, title, setTitle, onAddBypassItem, onDeleteBypassItem, onChangeTitle, onCreate } = useCreateBypassSheet();

    const keyExtractor = useCallback((item: IBypassItem) => `${item.id}`, []);

    const renderItem = useCallback(({ item, index }: { item: IBypassItem, index: number }) =>
        <BypassSheetCreatingRow sortNumber={index + 1} onDeleteItem={onDeleteBypassItem} onChangeText={onChangeTitle} value={item.title} id={item.id} />
        , []);

    return (
        <ScreenContainer>
            <HeaderWithBackButton title={t('createBypassSheet')} />
            <FlatList
                ListHeaderComponent={<TitleBypassSheet value={title} onChangeText={setTitle} />}
                style={styles.scroll}
                contentContainerStyle={styles.contentContainerStyle}
                keyExtractor={keyExtractor}
                data={bypassSheetItems}
                renderItem={renderItem}
            />
            <MainButton title={t('addItem')} onPress={onAddBypassItem} containerStyle={styles.button} />
            <MainButton title={t('create')} onPress={onCreate} containerStyle={styles.button} />
        </ScreenContainer>
    )
})
