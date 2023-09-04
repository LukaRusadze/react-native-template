import React from 'react';
import { TypedStackNavigator } from './MainStack';
import { LoginScreen, RegisterScreen } from '~/screens/BeforeAuth';

interface Props {
  Stack: TypedStackNavigator;
}

const BeforeAuth = ({ Stack }: Props) => {
  return (
    <>
      <Stack.Screen name={'Login'} component={LoginScreen} />
      <Stack.Screen name={'Register'} component={RegisterScreen} />
    </>
  );
};

export default BeforeAuth;
