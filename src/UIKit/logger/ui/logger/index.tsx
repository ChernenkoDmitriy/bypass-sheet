import { observer } from 'mobx-react';
import React, { FC, useCallback, useMemo } from 'react'
import { TouchableOpacity } from 'react-native';
import { useUiContext } from '../../../../../src/UIProvider';
import { loggerModel } from '../../entity/loggerModel';
import { LoggerIcon } from '../loggerIcon';
import { ModalLogger } from '../modalLogger';
import { getStyle } from './styles';


export const Logger: FC = observer(({ }) => {
    const { colors } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);

    const onOpen = useCallback(() => {
        loggerModel.isVisibleLogs = true;
    }, [])

    return (
        <>
            <TouchableOpacity style={styles.button} onPress={onOpen} >
                <LoggerIcon color={'gray'} />
            </TouchableOpacity >
            <ModalLogger />
        </>
    );
});