import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';

type StackParamList = {
  Login: undefined;
  Register: undefined;

  Home: undefined;
  Profile: undefined;
};

type MainStackScreenProps<T extends keyof StackParamList> = StackScreenProps<
  StackParamList,
  T
>;

type MainStackNavigationProp<T extends keyof StackParamList> =
  StackNavigationProp<StackParamList, T>;

type MainStackRouteProp<T extends keyof StackParamList> = RouteProp<
  StackParamList,
  T
>;
