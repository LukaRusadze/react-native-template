import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { StackParamList } from './types';

import { HomeScreen, ProfileScreen } from '@screens/AfterAuth';
import { LoginScreen, RegisterScreen } from '@screens/BeforeAuth';

const Stack = createStackNavigator<StackParamList>();

const MainStack = () => {
  const [isSignedIn] = useState(false);

  return (
    <Stack.Navigator>
      {isSignedIn ? (
        <>
          <Stack.Screen name={'Home'} component={HomeScreen} />
          <Stack.Screen name={'Profile'} component={ProfileScreen} />
        </>
      ) : (
        <>
          <Stack.Screen name={'Login'} component={LoginScreen} />
          <Stack.Screen name={'Register'} component={RegisterScreen} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default MainStack;
