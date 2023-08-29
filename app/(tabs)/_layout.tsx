import { Feather } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { useTheme } from 'tamagui';

export default function TabLayout() {
  const theme = useTheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.gray2.val,
        tabBarStyle: {
          height: 70,
          borderWidth: 1,
          borderRadius: 50,
          borderColor: theme.gray2.val,
          borderTopColor: theme.gray2.val,
          backgroundColor: theme.background.val,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: 'bold',
          marginBottom: 10,
        },
      }}>
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: () => <Feather name="home" size={24} color="black" />,
        }}
      />
    </Tabs>
  );
}
