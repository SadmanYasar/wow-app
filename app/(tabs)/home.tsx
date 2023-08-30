import { useColorScheme } from 'react-native';
import { Button, Paragraph, YStack } from 'tamagui';

import ImportContactsButton from '../../components/ImportContactsButton';
import RequestPermissionButton from '../../components/RequestPermissionButton';
import useContacts from '../../hooks/useContacts';
import usePermission from '../../hooks/usePermission';

export default function Home() {
	usePermission();
	const { contacts, importContacts } = useContacts();
	const colorScheme = useColorScheme();

	console.log('Home', contacts.length);

	return (
		<YStack f={1} jc="center" ai="center" backgroundColor="$background">
			<Paragraph color="$color" jc="center">
				{colorScheme} {contacts.length}
			</Paragraph>
			<ImportContactsButton
				size={contacts.length}
				importContacts={importContacts}
			/>
		</YStack>
	);
}
