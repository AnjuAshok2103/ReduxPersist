import { KeyboardTypeOptions, ViewStyle } from 'react-native';
import { ButtonProps, TextInputProps } from 'react-native-paper';

export type RootStackParams = {
  auth: undefined;
  unAuth: undefined;
};
export type AuthStackParams = {
  Home: undefined;
  Profile: undefined;
};
export type AuthBottomTabsParams = {
  Home: undefined;
  Cart: undefined;
};
export type UnAuthStackParams = {
  Login: undefined;
  Register: undefined;
};
export type UserCredentials = {
  username: string;
  password: string;
};
export type CustomTextInputProps = {
  control: any;
  name: string;
  rules: Object; // Optional: Add validation rules here
  // react-native-paper TextInput props
  label: string;
  placeholder: string;
  style?: TextInputProps['style'];
  keyboardType: KeyboardTypeOptions;
  secureTextEntry?: boolean;
  right?: React.ReactNode;
};

export type CustomButtonProps = {
  buttonText: string;
  mode?: 'text' | 'outlined' | 'contained';
  icon?: string;
  onPress: () => void;
  style?: ButtonProps['style'];
};
