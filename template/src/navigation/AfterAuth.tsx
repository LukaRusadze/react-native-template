import React from 'react';
import { TypedStackNavigator } from './MainStack';
import { HomeScreen, ProfileScreen } from '~/screens/AfterAuth';

interface Props {
  Stack: TypedStackNavigator;
}

const AfterAuth = ({ Stack }: Props) => {
  return (
    <>
      <Stack.Screen name={'Home'} component={HomeScreen} />
      <Stack.Screen name={'Profile'} component={ProfileScreen} />
    </>
  );
};

export default AfterAuth;
