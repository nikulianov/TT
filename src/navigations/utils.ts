export const getTabIcon = (name: string, focused: boolean) => {
  if (name === 'Home') {
    return focused ? 'home' : 'home-outline';
  } else if (name === 'Settings') {
    return focused ? 'ios-settings' : 'ios-settings-outline';
  }
  return focused ? 'people-sharp' : 'people-outline';
}
