import { observer } from 'mobx-react';
import React, { FC, useCallback, useMemo } from 'react';
import { useUiContext } from '../../../src/UIProvider';
import { HeaderWithBackButton } from '../../shared/ui/headerWithBackButton';
import { ScreenContainer } from '../../shared/ui/screenContainer';
import { getStyle } from './styles';
import { BypassSheetCreatingRow } from './components/bypassSheetCreatingRow';
import { IBypassItem } from '../../shared/entities/bypassList/IBypassItem';
import { useCreateBypassSheet } from '../presenters/useCreateBypassSheet';
import { BypassItemCreator } from '../../companyList/ui/components/bypassItemCreator';
import { BypassListTop } from './components/bypassListTop';
import { MainButton } from '../../shared/ui/mainButton';
import { BypassTitle } from './components/bypassTitle';
import { FlatList, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { CircleAbsoluteButton } from '../../shared/ui/circleAbsoluteButton';
import { ButtonAddItem } from './components/buttonAddItem';

export const BypassSheetCreateView: FC = observer(() => {
    const { colors, t } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);
    const { scroll, bypassSheetItems, title, address, bypassList, setAddress, setTitle, onDelete,
        onAddBypassItem, onDeleteBypassItem, onChangeTitle, onCreate } = useCreateBypassSheet();

    const keyExtractor = useCallback((item: IBypassItem) => `${item.id}`, []);

    const renderItem = useCallback(({ item }: { item: IBypassItem, index: number }) =>
        <BypassSheetCreatingRow onDeleteItem={onDeleteBypassItem} onChangeText={onChangeTitle} value={item.title} id={item.id} />
        , []);

    const renderItems = () =>
        bypassSheetItems.map((item: IBypassItem) =>
            <BypassSheetCreatingRow
                key={`${item.id}`}
                onDeleteItem={onDeleteBypassItem}
                onChangeText={onChangeTitle}
                value={item.title}
                id={item.id} />);

    return (
        <ScreenContainer keyboardShouldPersistTaps={false}>
            <HeaderWithBackButton title={t(bypassList ? 'editObject' : 'newObject')} />
            <KeyboardAwareScrollView keyboardShouldPersistTaps='handled' extraHeight={0} extraScrollHeight={0}>
                <View>
                    <BypassTitle isEditable={!!bypassList} onPress={onDelete} />
                    <BypassListTop {...{ title, setTitle, address, setAddress }} />
                    <BypassItemCreator title={t('criterialObject')} />
                    {renderItems()}
                    <ButtonAddItem onPress={onAddBypassItem} />
                </View>
                <MainButton title={t(bypassList ? 'update' : 'create')} onPress={onCreate} containerStyle={styles.button} />
            </KeyboardAwareScrollView>

            {/* <FlatList
                ListHeaderComponent={
                    <>
                        <BypassTitle isEditable={!!bypassList} onPress={onDelete} />
                        <BypassListTop {...{ title, setTitle, address, setAddress }} />
                        <BypassItemCreator title={t('criterialObject')} buttonText={t('addItem')} onPress={onAddBypassItem} />
                    </>}
                keyboardShouldPersistTaps='handled'
                ref={ref => scroll.current = ref}
                style={styles.scroll}
                contentContainerStyle={styles.contentContainerStyle}
                keyExtractor={keyExtractor}
                data={bypassSheetItems}
                renderItem={renderItem}
            /> */}
            {/* <MainButton title={t(bypassList ? 'update' : 'create')} onPress={onCreate} containerStyle={styles.button} /> */}
        </ScreenContainer>
    )
})
