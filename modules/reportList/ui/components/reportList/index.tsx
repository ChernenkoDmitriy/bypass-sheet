import React, { FC, useCallback, useMemo } from 'react';
import { FlatList } from 'react-native';
import { ICropedImage } from '../../../../../libs/imagePicker/IImagePicker/ICropedImage';
import { useUiContext } from '../../../../../src/UIProvider';
import { IBypassItem } from '../../../../shared/entities/bypassList/IBypassItem';
import { IBypassSheet } from '../../../../shared/entities/bypassList/IBypassSheet';
import { ReportItem } from '../reportItem';
import { getStyle } from './styles';

interface IProps {
    bypassReport: IBypassSheet | null;
    onChangeComment: (text: string, id: number) => void;
    onChangeRate: (rate: number, id: number) => void;
    onAddPhoto: (photo: ICropedImage, id: number) => void;
    onDeletePhoto: (id: number, path: string) => void;
    onChangeIsDone: (id: number) => void;
}

export const ReportList: FC<IProps> = ({ bypassReport, onChangeComment, onChangeRate, onAddPhoto, onDeletePhoto, onChangeIsDone }) => {
    const { colors } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);

    const renderItem = useCallback(({ item }: any) =>
        item ? <ReportItem  {...{ onChangeComment, onChangeRate, onAddPhoto, onDeletePhoto, onChangeIsDone, item }} /> : null
        , [bypassReport]);

    const keyExtractor = useCallback((item: IBypassItem) => `${item?.id}`, []);

    return (<FlatList
        keyboardShouldPersistTaps='handled'
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        data={bypassReport?.items || []}
        contentContainerStyle={styles.contentContainerStyle}
    />)
};
