import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';

import { Signin } from '@screens/Signin';
import { SignUp } from '@screens/SignUp';

type AuthRoutesProps = {
  signIn: undefined;
  signUp: undefined;
};

export type AuthNavigationroutesProps =
  NativeStackNavigationProp<AuthRoutesProps>;

const { Navigator, Screen } = createNativeStackNavigator<AuthRoutesProps>();

export const AuthRoutes: React.FC = ({}) => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="signIn" component={Signin} />
      <Screen name="signUp" component={SignUp} />
    </Navigator>
  );
};
