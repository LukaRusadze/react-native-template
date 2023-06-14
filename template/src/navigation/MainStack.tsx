import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { StackParamList } from '@navigation';
import AfterAuth from './AfterAuth';
import BeforeAuth from './BeforeAuth';

const Stack = createStackNavigator<StackParamList>();

const MainStack = () => {
  const [isSignedIn] = useState(false);

  return (
    <Stack.Navigator>
      {/* These have to be called as functions rather than used as components
      since Stack.Navigator component only accepts
      Fragment, Stack and Group component */}
      {isSignedIn ? AfterAuth({ Stack }) : BeforeAuth({ Stack })}
    </Stack.Navigator>
  );
};

export default MainStack;
export type TypedStackNavigator = typeof Stack;
