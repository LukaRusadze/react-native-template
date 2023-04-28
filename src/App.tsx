import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { SystemBars } from 'react-native-bars';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import MainStack from './navigation/MainStack';
import { enableScreens } from 'react-native-screens';
import { StyleSheet, useColorScheme } from 'react-native';
import { DarkTheme, LightTheme } from '@navigation/themes';
import { Provider } from 'react-redux';
import { store } from '@store';

enableScreens(true);

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Provider store={store}>
      <GestureHandlerRootView style={styles.container}>
        <SystemBars
          animated={true}
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        />
        <NavigationContainer theme={isDarkMode ? DarkTheme : LightTheme}>
          <MainStack />
        </NavigationContainer>
      </GestureHandlerRootView>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
