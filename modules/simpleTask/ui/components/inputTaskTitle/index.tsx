import { observer } from 'mobx-react';
import React, { FC, useEffect, useMemo } from 'react';
import { View, TextInput } from 'react-native';
import { useUiContext } from '../../../../../src/UIProvider';
import { simpleTaskModel } from '../../../../shared/entities/simpleTask/SimpleTaskModel';
import { getStyle } from './styles';

interface IProps { }

export const InputTaskTitle: FC<IProps> = observer(({ }) => {
    const { colors, t } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);

    return (
        <View style={styles.container}>
            <TextInput
                value={simpleTaskModel.chosenSimpleTask?.title}
                onChangeText={simpleTaskModel.updateTitle}
                multiline
                style={styles.input}
                placeholder={t('addTitle')}
                placeholderTextColor={colors.regularText}
            />
        </View>
    );
});
