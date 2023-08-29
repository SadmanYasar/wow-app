import { useRootNavigationState, Redirect } from 'expo-router';

/* 
  Using usingRootNavigationState to avoid navigating before mounting
  the Root Layout component error.

  Reference: https://github.com/expo/router/issues/740#issuecomment-1626015285
*/
const Index = () => {
  const rootNavigationState = useRootNavigationState();

  if (!rootNavigationState?.key) return null;

  return <Redirect href="home" />;
};

export default Index;
