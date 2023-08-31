
import React, { FC, useMemo } from 'react';
import { View, Text } from 'react-native';
import { useUiContext } from '../../../../../UIProvider';
import { CustomInput } from '../../../../shared/ui/customInput';
import { getStyle } from './styles';

interface IProps {
    companyName: string;
    companyAddress: string;
    setCompanyAddress: (value: string) => void;
    setCompanyName: (value: string) => void;
}

export const CompanyTop: FC<IProps> = ({ companyName, companyAddress, setCompanyAddress, setCompanyName }) => {
    const { colors, t } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{t('commonInformation')}</Text>
            <View style={styles.contentContainer}>
                <Text style={styles.description}>{t('groupName')}</Text>
                <CustomInput
                    autoFocus
                    containerStyle={styles.containerInput}
                    value={companyName}
                    onChangeText={setCompanyName}
                    placeholder={t('enterGroupName')}
                />
                <Text style={styles.description}>{t('address')}</Text>
                <CustomInput
                    containerStyle={styles.containerInput}
                    value={companyAddress}
                    onChangeText={setCompanyAddress}
                    placeholder={t('enterAddress')}
                />
            </View>
        </View>
    )
}
