import React, { FC, useMemo, memo, useState } from 'react';
import { View, Text } from 'react-native';
import ReactNativeModal from 'react-native-modal';
import { useUiContext } from '../../../../../src/UIProvider';
import { ColorThemeItem } from '../colorThemeItem';
import { SettingButton } from '../settingButton';
import { getStyle } from './styles';

interface IProps {
    onChangeTheme: (value: 'light' | 'dark') => void;
}

export const ChoseTheme: FC<IProps> = memo(({ onChangeTheme }) => {
    const [isVisible, setIsVisible] = useState(false);
    const { colors, t, theme } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);

    const onOpenModal = () => {
        setIsVisible(true);
    }

    const onCloseModal = () => {
        setIsVisible(false);
    }

    return (
        <>
            <SettingButton title={t('colorTheme')} description={t(theme)} onPress={onOpenModal} />
            <ReactNativeModal
                backdropOpacity={0.5}
                swipeDirection={'down'}
                style={styles.modal}
                isVisible={isVisible}
                onSwipeComplete={onCloseModal}
                onBackdropPress={onCloseModal}
            >
                <View style={styles.container}>
                    <Text style={styles.title}>{t('colorTheme')}</Text>
                    <View style={styles.themeButtonsContainer}>
                        <ColorThemeItem isChosen={theme === 'light'} text={t('lightMode')} onPress={() => { onChangeTheme('light') }} />
                        <ColorThemeItem isChosen={theme === 'dark'} text={t('darkMode')} onPress={() => { onChangeTheme('dark') }} />
                    </View>
                </View>
            </ReactNativeModal>
        </>
    );
});
