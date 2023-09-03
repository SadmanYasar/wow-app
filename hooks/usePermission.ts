import { useEffect, useRef } from 'react';
import { Alert, AppState } from 'react-native';

import utils from '../utils';

export default function usePermission() {
	const appState = useRef(AppState.currentState);

	// const showAlertWithRedirect = () => {
	// 	Alert.alert(
	// 	  'Permission Required',
	// 	  'This feature requires Contacts permission.',
	// 	  [
	// 		{
	// 		  text: 'Open Settings',
	// 		  onPress: () => {
	// 			Linking.openSettings();
	// 		  },
	// 		},
	// 	  ],
	// 	  { cancelable: false },
	// 	);
	// };

	useEffect(() => {
		const subscription = AppState.addEventListener(
			'change',
			async nextAppState => {
				if (
					appState.current.match(/inactive|background/) &&
					nextAppState === 'active'
				) {
					//check if contact permission is granted
					const hasPermission = await utils.getPermission();
					console.log('hasPermission', hasPermission);

					if (!hasPermission) {
						//ask for permission to access contacts
						Alert.alert(
							'Permission Required',
							'This app requires Contacts permission.',
							[
								{
									text: 'Open Settings',
									onPress: () => {
										utils.redirectToSettings();
									},
								},
							],
						);
					}
				}

				appState.current = nextAppState;
				console.log('AppState', appState.current);
			},
		);

		return () => {
			subscription.remove();
		};
	}, []);
}
