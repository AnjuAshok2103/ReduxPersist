import { View, Text } from 'react-native';
import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { UnAuthStackParams } from '@src/types';
type RegisterScreenProps = NativeStackScreenProps<
  UnAuthStackParams,
  'Register'
>;
const RegisterScreen = ({ navigation, route }: RegisterScreenProps) => {
  return (
    <View>
      <Text>Register</Text>
    </View>
  );
};

export default RegisterScreen;
