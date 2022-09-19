import React, { FC, memo, useMemo } from 'react';
import { Image, TouchableOpacity, View, Text } from 'react-native';
import FastImage from 'react-native-fast-image';
import { UserLogoUnknownIcon } from '../../../../../assets/icons/UserLogoUnknownIcon';
import { useUiContext } from '../../../../../src/UIProvider';
import { scaleVertical } from '../../../../../src/utils/Utils';
import { HeaderWithBackButton } from '../../../../shared/ui/headerWithBackButton';
import { getStyle } from './styles';

interface IProps {
    onAuth: () => void;
    photo?: string | null;
}

export const DashboardHeader: FC<IProps> = memo(({ onAuth, photo }) => {
    const { colors, t } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);

    return (
        <HeaderWithBackButton isBackAvailable={false} >
            <View style={styles.container}>
                <View style={styles.logoWrapper}>
                    <Image style={styles.logo} source={require('../../../../../assets/img/logo.png')} />
                    <Text style={styles.appName}>{t('appName')}</Text>
                </View>
                <TouchableOpacity style={styles.button} onPress={onAuth}>
                    {photo
                        ? <FastImage source={{ uri: photo }} style={styles.avatar} />
                        : <UserLogoUnknownIcon color={colors.accentColorLight} width={scaleVertical(32)} height={scaleVertical(32)} />}
                </TouchableOpacity>
            </View>
        </HeaderWithBackButton>

    )
});
