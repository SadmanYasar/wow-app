import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { Suspense, useEffect } from 'react';
import { useColorScheme } from 'react-native';
import { TamaguiProvider, Theme, Text } from 'tamagui';

import { MySafeAreaView } from '../components/MySafeAreaView';
import config from '../tamagui.config';

SplashScreen.preventAutoHideAsync();

export default function StackLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),

    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }
  return (
    <TamaguiProvider config={config}>
      <Suspense fallback={<Text>Loading...</Text>}>
        <Theme name={colorScheme === 'dark' ? 'dark' : 'light'}>
          <MySafeAreaView>
            <Stack>
              <Stack.Screen
                name="(tabs)"
                options={{
                  headerShown: false,
                }}
              />
            </Stack>
          </MySafeAreaView>
        </Theme>
      </Suspense>
    </TamaguiProvider>
  );
}
