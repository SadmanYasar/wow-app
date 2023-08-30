import { Linking } from 'react-native';

export const redirectToSettings = async () => {
	await Linking.openSettings();
};
