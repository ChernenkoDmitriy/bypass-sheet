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
    logo?: boolean;
    title?: string;
    settings?: boolean;
    create?: boolean;
    onCreate?: () => void;
};

export const DashboardHeader: FC<IProps> = memo(({ photo, title, isBackAvailable, logo = true, create = false, settings = false, onCreate }) => {
    const { colors, t } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);
    const navigation = useNavigation<StackNavigationProp<any>>();

    const goToSettings = () => navigation.navigate('SettingsView');

    return (
        <HeaderWithBackButton isBackAvailable={isBackAvailable} >
            <View style={styles.container}>
                <View style={styles.logoWrapper}>
                    {logo
                        ? <Image style={styles.logo} source={require('../../../../../../assets/img/logo.png')} />
                        : null
                    }
                    <Text style={styles.appName}>{title || t('appName')}</Text>
                </View>
                {settings
                    ? <TouchableOpacity onPress={goToSettings}>
                        <SettingsIcon width={scaleVertical(35)} height={scaleVertical(35)} />
                    </TouchableOpacity>
                    : null
                }
                {create
                    ? <TouchableOpacity style={styles.createButton} onPress={onCreate}>
                        <Text style={styles.text}>{t('create')}</Text>
                    </TouchableOpacity>
                    : null
                }
            </View>
        </HeaderWithBackButton>
    );
});
