import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { SystemBars } from 'react-native-bars';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import MainStack from './navigation/MainStack';
import { enableScreens } from 'react-native-screens';
import { useColorScheme } from 'react-native';
import { DarkTheme, LightTheme } from './navigation/themes';

enableScreens(true);

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SystemBars
        animated={true}
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      />
      <NavigationContainer theme={isDarkMode ? DarkTheme : LightTheme}>
        <MainStack />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default App;
