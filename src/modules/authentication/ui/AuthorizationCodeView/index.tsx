import React, { FC, useMemo } from 'react';
import { getStyle } from './styles';
import { useUiContext } from '../../../../UIProvider';
import { observer } from 'mobx-react';

import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { ScreenContainer } from '../../../../UIKit/screenContainer';


export const AuthorizationCodeView: FC = observer(() => {
    const { colors, t } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);
    const navigation = useNavigation<StackNavigationProp<any>>();

    return (
        <ScreenContainer defaultStyle={{ backgroundColor: colors.background }} edges={['top']}>
            
        </ScreenContainer>
    );
});
