import React, { FC, useCallback, useMemo, useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import { useUiContext } from '../../../../../src/UIProvider';
import { ILog } from '../../entity/loggerModel';
import { getStyle } from './styles';

interface IProps {
    item: ILog;
}

export const LoggerItem: FC<IProps> = ({ item }) => {
    const [show, setShow] = useState(false);
    const { colors } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);

    const onShow = useCallback(() => { setShow(prev => !prev) }, [])

    return (
        <View style={styles.container} >
            <TouchableOpacity onPress={onShow} style={styles.button}>
                <>
                    <Text style={styles.text}>{item.type}</Text>
                    <Text style={styles.name}>{item.name}</Text>
                </>
            </TouchableOpacity>
            {show && <Text style={styles.text} selectable={true}>{item.message}</Text>}
        </View >
    );
};