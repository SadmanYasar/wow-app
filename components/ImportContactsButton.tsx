import { Button } from 'tamagui';

interface ImportContactsButtonProps {
	size: number;
	importContacts: () => Promise<void>;
}

export default function ImportContactsButton({
	size = 0,
	importContacts,
}: ImportContactsButtonProps) {
	if (size !== 0) return null;

	return <Button onPress={importContacts}>Import Contacts</Button>;
}
