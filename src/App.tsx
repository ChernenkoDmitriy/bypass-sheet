import React, { FC } from 'react';
import { RootNavigator } from './navigation/rootNavigator';
import { UIProvider } from './UIProvider';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export const App: FC = () => {

	return (
		<SafeAreaProvider style={{ flex: 1 }} >
			<UIProvider>
				<RootNavigator />
			</UIProvider>
		</SafeAreaProvider>
	);
}
