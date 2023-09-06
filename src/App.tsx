import React, { FC } from 'react';
import { RootNavigator } from './navigation/rootNavigator';
import { UIProvider, useUiContext} from './UIProvider';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { allColors } from './UIProvider/colors/AllColors';

export const App: FC = () => {
	return (
		<SafeAreaProvider style={{ flex: 1, backgroundColor: allColors.light.background }} >
			<UIProvider>
				<RootNavigator />
			</UIProvider>
		</SafeAreaProvider>
	);
}
