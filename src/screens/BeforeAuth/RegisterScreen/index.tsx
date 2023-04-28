import { View, Text } from 'react-native';
import React from 'react';
import { MainStackScreenProps } from '../../../navigation/types';

type Props = MainStackScreenProps<'Register'>;

const RegisterScreen = ({}: Props) => {
  return (
    <View>
      <Text>RegisterScreen</Text>
    </View>
  );
};

export default RegisterScreen;
