import { View, Text } from 'react-native';
import React, { useState } from 'react';
import { UnAuthStackParams } from '@src/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import CustomTextInput from '@src/components/CustomTextInput';
import { ActivityIndicator, TextInput } from 'react-native-paper';
import { useForm } from 'react-hook-form';
import CustomButton from '@src/components/CustomButton';
import { login } from '@src/redux/features/authSlice';
import { useAppDispatch, useAppSelector } from '@src/hooks';
import { MaterialDesignIcons } from '@react-native-vector-icons/material-design-icons';

type LoginScreenProps = NativeStackScreenProps<UnAuthStackParams, 'Login'>;
const LoginScreen = ({ navigation, route }: LoginScreenProps) => {
  const form = useForm({
    defaultValues: {
      userName: '',
      password: '',
    },
  });
  const { control, trigger, handleSubmit } = form;
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const { isLoading } = useAppSelector(state => state.auth);
  const dispatch = useAppDispatch();

  const validateEmailOrUsername = (value: string) => {
    const emailRegex = /^\S+@\S+$/i;
    const usernameRegex = /^[a-zA-Z0-9_]{3,}$/; // At least 3 characters, alphanumeric and underscores

    if (emailRegex.test(value) || usernameRegex.test(value)) {
      return true;
    }
    return 'Enter a valid email or username';
  };

  const handleLogin = async ({
    userName,
    password,
  }: {
    userName: string;
    password: string;
  }) => {
    // Handle login logic here
    const results = await trigger();
    const params = {
      username: userName,
      password: password,
    };
    console.log('Login button pressed', results);

    if (results) {
      dispatch(login(params));
    }
  };

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Loading...</Text>
        <ActivityIndicator size="small" color="#090969ff" />
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 18,
        gap: 10,
        paddingTop: 20,
      }}
    >
      <View style={{ marginVertical: 50, alignItems: 'center' }}>
        <Text>Login</Text>
      </View>
      <View style={{ width: '100%' }}>
        <CustomTextInput
          control={control}
          name="userName"
          label="Username or email"
          placeholder="Enter your email or username"
          keyboardType="email-address" // Specific prop for email
          rules={{
            required: 'This field is required',
            pattern: {
              // Basic email validation regex
              validate: validateEmailOrUsername,
            },
          }}
        />

        <CustomTextInput
          control={control}
          name="password"
          label="Password"
          placeholder="Create a strong password"
          secureTextEntry={secureTextEntry} // Specific prop for password
          right={
            <TextInput.Icon
              icon={secureTextEntry ? 'eye-off' : 'eye'}
              color="gray"
              onPress={() => setSecureTextEntry(prev => !prev)}
            />
          } // Example of adding a paper icon
          rules={{
            required: 'Password is required',
            minLength: {
              value: 8,
              message: 'Password must be at least 8 characters',
            },
          }}
          keyboardType="default"
        />
      </View>
      <CustomButton
        mode="outlined"
        buttonText="Login"
        onPress={handleSubmit(handleLogin)}
      />
    </View>
  );
};

export default LoginScreen;
