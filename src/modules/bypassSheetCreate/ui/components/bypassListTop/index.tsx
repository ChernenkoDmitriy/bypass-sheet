
import React, { FC, useMemo } from 'react';
import { View, Text } from 'react-native';
import { useUiContext } from '../../../../../UIProvider';
import { CustomInput } from '../../../../shared/ui/customInput';
import { getStyle } from './styles';

interface IProps {
    title: string;
    address: string;
    setTitle: (value: string) => void;
    setAddress: (value: string) => void;
}

export const BypassListTop: FC<IProps> = ({ title, setTitle, address, setAddress }) => {
    const { colors, t } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);

    return (
        <View style={styles.container}>
            <View style={styles.contentContainer}>
                <Text style={styles.description}>{t('groupName')}</Text>
                <CustomInput
                    autoFocus
                    containerStyle={styles.containerInput}
                    value={title}
                    onChangeText={setTitle}
                    placeholder={t('enterGroupName')}
                />
                <Text style={styles.description}>{t('address')}</Text>
                <CustomInput
                    containerStyle={styles.containerInput}
                    value={address}
                    onChangeText={setAddress}
                    placeholder={t('enterAddress')}
                />
            </View>
        </View>
    )
}
