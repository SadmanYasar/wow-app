import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { Suspense } from 'react';
import { useColorScheme, Text } from 'react-native';
import { Button, Paragraph, Spacer, TamaguiProvider, Theme, YStack } from 'tamagui';

import config from './tamagui.config';

export default function App() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),

    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  });
  if (!loaded) {
    return null;
  }
  return (
    <TamaguiProvider config={config}>
      <Theme name={colorScheme === 'dark' ? 'dark' : 'light'}>
        <YStack f={1} jc="center" ai="center" backgroundColor="$background">
          <Paragraph color="$color" jc="center">
            {colorScheme} hello
          </Paragraph>
          <Button>Button</Button>
          <StatusBar style="auto" />
        </YStack>
      </Theme>
    </TamaguiProvider>
  );
}
