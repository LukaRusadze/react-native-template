import { View, Text } from 'react-native';
import React from 'react';
import { MainStackScreenProps } from '../../../navigation/types';

type Props = MainStackScreenProps<'Profile'>;

const ProfileScreen = ({}: Props) => {
  return (
    <View>
      <Text>ProfileScreen</Text>
    </View>
  );
};

export default ProfileScreen;
