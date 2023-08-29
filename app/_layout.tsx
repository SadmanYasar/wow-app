import { useFonts } from 'expo-font';
import { Stack, SplashScreen } from 'expo-router';

// export default function StackLayout() {
//   return (
//     <>
//       <Stack>
//         <Stack.Screen
//           name="(tabs)"
//           options={{
//             headerShown: false,
//           }}
//         />
//       </Stack>
//     </>
//   );
// }

import { Suspense } from 'react';
import { useColorScheme } from 'react-native';
import {
  Button,
  Paragraph,
  TamaguiProvider,
  Theme,
  YStack,
  Text,
} from 'tamagui';

import { MySafeAreaView } from '../components/MySafeAreaView';
import config from '../tamagui.config';

export default function StackLayout() {
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
      <Suspense fallback={<Text>Loading...</Text>}>
        <Theme name={colorScheme === 'dark' ? 'dark' : 'light'}>
          <MySafeAreaView>
            <YStack f={1} jc="center" ai="center" backgroundColor="$background">
              <Paragraph color="$color" jc="center">
                {colorScheme} hello
              </Paragraph>
              <Button>Button</Button>
              {/* <StatusBar style="auto" /> */}
            </YStack>
          </MySafeAreaView>
        </Theme>
      </Suspense>
    </TamaguiProvider>
  );
}
