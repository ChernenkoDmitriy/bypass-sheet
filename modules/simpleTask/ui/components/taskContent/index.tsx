import React, { FC, useMemo } from 'react';
import { View } from 'react-native';
import { useUiContext } from '../../../../../src/UIProvider';
import { ITaskContent } from '../../../../shared/entities/simpleTask/ITaskContent';
import { TaskText } from '../taskText';
import { getStyle } from './styles';

interface IProps {
    content: ITaskContent[];
    onSetActiveContentId: (item: number | string) => void;
}

const COMPONENTS = {
    TEXT: TaskText,
    IMAGE: TaskText,
}

export const TaskContent: FC<IProps> = ({ content, onSetActiveContentId }) => {
    const { colors } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);

    return (
        <View style={styles.container}>
            {
                content.map((item, index) => {
                    const Component = COMPONENTS[item.type];
                    return Component
                        ? <Component
                            isShowPlaceholder={content.length - 1 === index}
                            onSetActiveContentId={onSetActiveContentId}
                            item={item as any}
                            key={item.id} />
                        : null;
                })
            }
        </View>
    );
};
