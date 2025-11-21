import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UnAuthenticatedStack from '../unauth';
import AuthenticatedBottomTab from '../auth';
import { useAppSelector } from '@src/hooks';

const RootStack = createNativeStackNavigator();
const RootStackNav = () => {
  const { user } = useAppSelector(state => state.auth);
  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      {!user ? (
        <RootStack.Screen name="unAuth" component={UnAuthenticatedStack} />
      ) : (
        <RootStack.Screen name="auth" component={AuthenticatedBottomTab} />
      )}
    </RootStack.Navigator>
  );
};

export default RootStackNav;
