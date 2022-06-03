import { observer } from 'mobx-react';
import React, { FC } from 'react';
import { ScrollView } from 'react-native';
import { useUiContext } from '../../../src/UIProvider';
import { HeaderWithBackButton } from '../../shared/ui/headerWithBackButton';
import { ScreenContainer } from '../../shared/ui/screenContainer';
import { useSimpleTask } from '../presenters/useSimpleTask';
import { BottomTaskMenu } from './components/bottomTaskMenu';
import { DeleteTaskButton } from './components/deleteTaskButton';
import { InputTaskTitle } from './components/inputTaskTitle';
import { SaveTaskButton } from './components/saveTaskButton';
import { TaskContent } from './components/taskContent';

export const SimpleTaskView: FC = observer(() => {
    const { t } = useUiContext();
    const { chosenSimpleTask, onAddCheckBox, onSetActiveContentId, onAddText, onSaveTask, onDeleteTask } = useSimpleTask();

    return (
        <ScreenContainer keyboardShouldPersistTaps={false}>
            <HeaderWithBackButton title={chosenSimpleTask?.title || t('title')} >
                <DeleteTaskButton onDeleteTask={onDeleteTask} />
                <SaveTaskButton onSave={onSaveTask} />
            </HeaderWithBackButton>
            <ScrollView keyboardShouldPersistTaps={'always'}>
                <InputTaskTitle />
                <TaskContent content={chosenSimpleTask?.content || []} onSetActiveContentId={onSetActiveContentId} />
            </ScrollView>
            <BottomTaskMenu onAddCheckBox={onAddCheckBox} onAddText={onAddText} />
        </ScreenContainer>
    )
})
