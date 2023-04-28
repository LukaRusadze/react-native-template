import { createStackNavigator } from '@react-navigation/stack';
import React, { useState } from 'react';
import { StackParamList } from './types';
import LoginScreen from '../screens/BeforeAuth/LoginScreen';
import RegisterScreen from '../screens/BeforeAuth/RegisterScreen';
import HomeScreen from '../screens/AfterAuth/HomeScreen';
import ProfileScreen from '../screens/AfterAuth/ProfileScreen';

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
