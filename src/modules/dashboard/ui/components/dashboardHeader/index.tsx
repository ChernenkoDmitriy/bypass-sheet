import React, { FC, memo, useMemo } from 'react';
import { Image, View, Text, TouchableOpacity } from 'react-native';
import { useUiContext } from '../../../../../UIProvider';
import { HeaderWithBackButton } from '../../../../shared/ui/headerWithBackButton';
import { getStyle } from './styles';
import { SettingsIcon } from '../../../../../../assets/icons/SettingsIcon';
import { scaleVertical } from '../../../../../utils/Utils';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

interface IProps {
    photo?: string | null;
    isBackAvailable?: boolean;
    title?: string;
    settings?: boolean;
}

export const DashboardHeader: FC<IProps> = memo(({ photo, title, isBackAvailable, settings = false }) => {
    const { colors, t } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);
    const navigation = useNavigation<StackNavigationProp<any>>();

    const goToSettings = () => navigation.navigate('SettingsView');

    return (
        <HeaderWithBackButton isBackAvailable={isBackAvailable} >
            <View style={styles.container}>
                <View style={styles.logoWrapper}>
                    <Image style={styles.logo} source={require('../../../../../../assets/img/logo.png')} />
                    <Text style={styles.appName}>{title || t('appName')}</Text>
                </View>
                {settings
                    ? <TouchableOpacity style={styles.settingsButton} onPress={goToSettings}>
                        <SettingsIcon width={scaleVertical(35)} height={scaleVertical(35)} />
                    </TouchableOpacity>
                    : null
                }
            </View>
        </HeaderWithBackButton>
    );
});
