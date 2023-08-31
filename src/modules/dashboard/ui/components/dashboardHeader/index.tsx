import React, { FC, memo, useMemo } from 'react';
import { Image, View, Text } from 'react-native';
import { useUiContext } from '../../../../../UIProvider';
import { HeaderWithBackButton } from '../../../../shared/ui/headerWithBackButton';
import { getStyle } from './styles';

interface IProps {
    photo?: string | null;
    isBackAvailable?: boolean;
}

export const DashboardHeader: FC<IProps> = memo(({ photo, isBackAvailable }) => {
    const { colors, t } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);

    return (
        <HeaderWithBackButton isBackAvailable={isBackAvailable} >
            <View style={styles.container}>
                <View style={styles.logoWrapper}>
                    <Image style={styles.logo} source={require('../../../../../../assets/img/logo.png')} />
                    <Text style={styles.appName}>{t('appName')}</Text>
                </View>
            </View>
        </HeaderWithBackButton>
    );
});
