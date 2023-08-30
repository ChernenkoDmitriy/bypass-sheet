import { useNavigation } from '@react-navigation/native';
import { observer } from 'mobx-react';
import moment from 'moment';
import React, { FC, useCallback, useMemo } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { ChevronIcon } from '../../../../../../assets/icons/ChevronIcon';
import { useUiContext } from '../../../../../UIProvider';
import { bypassReportModel } from '../../../../shared/entities/bypassReport/BypassReportModel';
import { getStyle } from './styles';

interface IProps {
}

export const ContinueReport: FC<IProps> = observer(() => {
    const { colors, t } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);
    const navigation = useNavigation<any>();

    const onHandlePress = useCallback(() => {
        navigation.navigate('BypassSheetView');
    }, []);

    const date = useMemo(() => {
        let result = '';
        if (bypassReportModel.bypassReport?.lastUpdate) {
            result = moment(bypassReportModel.bypassReport.lastUpdate).format('DD.MM.YY')
        }
        return result;
    }, [bypassReportModel.bypassReport?.lastUpdate])

    return (bypassReportModel.bypassReport ? <TouchableOpacity style={styles.container} onPress={onHandlePress}>
        <Text style={styles.title} numberOfLines={1}>{date}</Text>
        <View style={styles.rightContemner}>
            <Text style={styles.title} numberOfLines={1}>{t('continue')}</Text>
            <ChevronIcon position='RIGHT' />
        </View>
    </TouchableOpacity> : null
    )
})
