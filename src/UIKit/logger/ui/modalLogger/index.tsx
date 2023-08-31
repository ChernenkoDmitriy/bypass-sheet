import { observer } from 'mobx-react';
import React, { FC, useCallback, useMemo, } from 'react'
import { FlatList, Modal, TouchableOpacity, View, Text, SafeAreaView } from 'react-native';
import { useUiContext } from '../../../../../src/UIProvider';
import { ILog, loggerModel } from '../../entity/loggerModel';
import { LoggerItem } from '../loggerItem';
import { getStyle } from './styles';

export const ModalLogger: FC = observer(({ }) => {
    const { colors } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);

    const renderItem = useCallback(({ item }: any) => <LoggerItem item={item} />, []);

    const keyExtractor = useCallback((item: ILog) => item.id, []);

    const onClose = useCallback(() => {
        loggerModel.isVisibleLogs = false;
    }, [])

    return (
        <Modal visible={loggerModel.isVisibleLogs}>
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity style={styles.button} onPress={onClose} >
                        <Text style={styles.buttonText}>Close</Text>
                    </TouchableOpacity >
                </View>
                <FlatList
                    data={loggerModel.logs}
                    renderItem={renderItem}
                    keyExtractor={keyExtractor}
                    style={styles.container}
                />
            </SafeAreaView>
        </Modal >
    );
});