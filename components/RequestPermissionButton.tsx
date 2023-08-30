import { useEffect, useState } from 'react';
import { Linking } from 'react-native';
import { Button } from 'tamagui';

import utils from '../utils';

export default function RequestPermissionButton() {
	return (
		<Button onPress={utils.redirectToSettings}>
			Give Contacts Permission
		</Button>
	);
}
