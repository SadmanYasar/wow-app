import * as Contacts from 'expo-contacts';

export const getPermission = async (): Promise<boolean> => {
	const { status } = await Contacts.getPermissionsAsync();
	if (status === 'granted') {
		return true;
	}
	return false;
};
