import { useColorScheme } from 'react-native';
import { Button, Paragraph, YStack } from 'tamagui';

export default function Home() {
  const colorScheme = useColorScheme();

  return (
    <YStack f={1} jc="center" ai="center" backgroundColor="$background">
      <Paragraph color="$color" jc="center">
        {colorScheme} hello
      </Paragraph>
      <Button>Button</Button>
      {/* <StatusBar style="auto" /> */}
    </YStack>
  );
}
