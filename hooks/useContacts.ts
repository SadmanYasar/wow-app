import * as Contacts from 'expo-contacts';
import { useState, useEffect } from 'react';

import utils from '../utils';

export default function useContacts() {
	const [contacts, setContacts] = useState<Contacts.Contact[]>([]);

	const importContacts = async () => {
		try {
			const { status } = await Contacts.requestPermissionsAsync();
			if (status === 'granted') {
				const { data } = await Contacts.getContactsAsync({
					fields: [
						Contacts.Fields.Name,
						Contacts.Fields.PhoneNumbers,
					],
				});

				if (data.length > 0) {
					const contact = data[150];
					setContacts([contact]);
					// remember to remove this
					console.log('useContacts', contacts.length);
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
