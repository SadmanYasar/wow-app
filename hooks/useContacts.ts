import * as Contacts from 'expo-contacts';
import { useState, useEffect } from 'react';

import utils from '../utils';

export default function useContacts() {
	const [contacts, setContacts] = useState<Contacts.Contact[]>([]);

	const importContacts = async (): Promise<void> => {
		try {
			await Contacts.requestPermissionsAsync();
			const hasPermission = await utils.getPermission();
			if (hasPermission) {
				const { data } = await Contacts.getContactsAsync({
					fields: [
						Contacts.Fields.Name,
						Contacts.Fields.PhoneNumbers,
					],
				});

				if (data.length > 0) {
					const contact = data[150];
					console.log('phone', contact.phoneNumbers);
					setContacts([contact]);
					// remember to remove this
					console.log('useContacts', contacts);
				}
			}
		} catch (error) {
			console.log('useContacts', error);
		}
	};

	//call importContacts on useffect
	useEffect(() => {
		(async () => {
			await importContacts();
		})();
	}, []);

	return {
		contacts,
		importContacts,
	};
}
