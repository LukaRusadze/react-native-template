import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import { SystemBars } from 'react-native-bars';

const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  return (
    <>
      <SystemBars barStyle={'dark-content'} />
      <NavigationContainer>{isSignedIn ? <></> : <></>}</NavigationContainer>
    </>
  );
};

export default App;
