import React, { FC, useMemo } from 'react';
import { Keyboard, ScrollView, View, ViewStyle } from 'react-native';
import { Edge, SafeAreaView } from 'react-native-safe-area-context';
import { useUiContext } from '../../UIProvider';
import { getStyle } from './styles';

interface IProps {
    edges?: Edge[];
    children: React.ReactNode;
    scrollEnabled?: boolean;
    keyboardShouldPersistTaps?: boolean;
    containerStyle?: ViewStyle;
    contentContainerStyle?: ViewStyle;
    headerComponent?: React.ReactNode;
    defaultStyle?: ViewStyle
}

export const ScreenContainer: FC<IProps> = ({ headerComponent, edges, children, scrollEnabled = false, keyboardShouldPersistTaps = true, defaultStyle, containerStyle, contentContainerStyle }) => {
    const { colors } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);

    return (
        <SafeAreaView style={[styles.default, defaultStyle]} edges={edges} >
            {!!headerComponent && headerComponent}
            {scrollEnabled
                ? <ScrollView
                    scrollEnabled={scrollEnabled}
                    bounces={false}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={[styles.contentContainerStyle, contentContainerStyle]}
                    style={styles.contentContainerStyle}
                    keyboardDismissMode='interactive'
                    keyboardShouldPersistTaps={'handled'}
                >
                    {children}
                </ScrollView>
                : <View style={[styles.container]} onStartShouldSetResponder={keyboardShouldPersistTaps ? Keyboard.dismiss : undefined as any}>
                    <View style={[styles.container, containerStyle]}>
                        {children}
                    </View>
                </View>}
        </SafeAreaView>
    );
};
