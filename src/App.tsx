import React, { FC } from 'react';
import { RootNavigator } from './navigation/rootNavigator';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { UIProvider } from './UIProvider';

export const App: FC = () => {
	return (
		<GestureHandlerRootView style={{ flex: 1 }}>
			<UIProvider>
				<RootNavigator />
			</UIProvider>
		</GestureHandlerRootView>
	);
}
