import React, { FC, memo, useCallback, useEffect, useMemo, useState } from 'react';
import { View, Text, Image } from 'react-native';
import { useUiContext } from '../../UIProvider';
import { MainButton } from '../mainButton';
import { getStyle } from './styles';
import { ScreenContainer } from '../screenContainer';
import { appStateModel } from '../../modules/shared/entities/appState/AppStateModel';
import { useNetInfo } from '@react-native-community/netinfo';

const LOGO = require('../../../assets/img/logo.png');

export const InternetConnection: FC = memo(({ }) => {
    const { colors, t } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);
    const { isConnected } = useNetInfo();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (typeof isConnected === 'boolean') {
            appStateModel.isConnected = isConnected;
        };
    }, [isConnected]);

    const onPress = useCallback(() => {
        setIsLoading(true);
        setTimeout(() => setIsLoading(false), 5000);
    }, []);

    return ((typeof isConnected === 'object' || isConnected)
        ? null
        : <ScreenContainer containerStyle={styles.container}>
            <View style={styles.contentWrapper}>
                <Image style={styles.image} resizeMode={"contain"} source={LOGO} />
                <Text style={styles.title}>{t('noConnection')}</Text>
                <MainButton containerStyle={styles.containerButton} title={t('refresh')} onPress={onPress} inProgress={isLoading} />
            </View>
        </ScreenContainer>
    )
});
