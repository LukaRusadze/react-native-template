import { View, Text } from 'react-native';
import React from 'react';
import { MainStackScreenProps } from '../../../navigation/types';

type Props = MainStackScreenProps<'Home'>;

const HomeScreen = ({}: Props) => {
  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;
