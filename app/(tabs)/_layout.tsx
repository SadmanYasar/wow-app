import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { useColorScheme } from 'react-native';
import { useTheme } from 'tamagui';

export default function TabLayout() {
  const theme = useTheme();
  const scheme = useColorScheme();

  return (
    <Tabs
      initialRouteName="home"
      screenOptions={{
        tabBarActiveTintColor: theme.color.val,
        tabBarStyle: {
          height: 52,
          borderWidth: 1,
          borderColor: theme.gray2.val,
          borderTopColor: theme.gray2.val,
          backgroundColor: theme.background.val,
        },
        headerShown: false,
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => {
            return focused ? (
              <Ionicons name="home-sharp" color={color} size={30} />
            ) : (
              <Ionicons name="home-outline" color={color} size={30} />
            );
          },
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color, focused }) => {
            return focused ? (
              <Ionicons name="settings-sharp" color={color} size={30} />
            ) : (
              <Ionicons name="settings-outline" color={color} size={30} />
            );
          },
        }}
      />
    </Tabs>
  );
}
