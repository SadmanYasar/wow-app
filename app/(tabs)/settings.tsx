import { useColorScheme } from 'react-native';
import { Button, Paragraph, YStack } from 'tamagui';

export default function Settings() {
  const colorScheme = useColorScheme();

  return (
    <YStack f={1} jc="center" ai="center" backgroundColor="$background">
      <Paragraph color="$color" jc="center">
        {colorScheme} hello
      </Paragraph>
      <Button>Settings</Button>
      {/* <StatusBar style="auto" /> */}
    </YStack>
  );
}
