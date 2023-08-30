import { useColorScheme } from 'react-native';
import { Button, Paragraph, YStack } from 'tamagui';

import RequestPermissionButton from '../../components/RequestPermissionButton';

export default function Settings() {
	const colorScheme = useColorScheme();

	return (
		<YStack f={1} jc="center" ai="center" backgroundColor="$background">
			<Paragraph color="$color" jc="center">
				{colorScheme} hello
			</Paragraph>
			<RequestPermissionButton />
			{/* <StatusBar style="auto" /> */}
		</YStack>
	);
}
