module.exports = {
	expo: {
		name: 'wow-app-sqlite',
		slug: 'wow-app-sqlite',
		scheme: 'your-app-scheme',
		version: '1.0.0',
		orientation: 'portrait',
		icon: './assets/icon.png',
		userInterfaceStyle: 'automatic',
		splash: {
			image: './assets/splash.png',
			resizeMode: 'contain',
			backgroundColor: '#000000',
		},
		assetBundlePatterns: ['**/*'],
		ios: {
			supportsTablet: true,
		},
		android: {
			adaptiveIcon: {
				foregroundImage: './assets/adaptive-icon.png',
				backgroundColor: '#ffffff',
			},
		},
		web: {
			favicon: './assets/favicon.png',
		},
		plugins: [
			'expo-router',
			[
				'expo-contacts',
				{
					contactsPermission:
						'Allow $(PRODUCT_NAME) to access your contacts.',
				},
			],
		],
	},
};
