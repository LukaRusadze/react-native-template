import { View, Text } from 'react-native';
import React from 'react';
import { MainStackScreenProps } from '@navigation';

type Props = MainStackScreenProps<'Login'>;

const LoginScreen = ({}: Props) => {
  return (
    <View>
      <Text>LoginScreen</Text>
    </View>
  );
};

export default LoginScreen;
