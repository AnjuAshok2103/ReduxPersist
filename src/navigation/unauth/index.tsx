import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '@src/screens/unauth/Login';
import RegisterScreen from '@src/screens/unauth/Register';
import { UnAuthStackParams } from '@src/types';

const UnAuthStack = createNativeStackNavigator<UnAuthStackParams>();
const UnAuthenticatedStack = () => {
  return (
    <UnAuthStack.Navigator screenOptions={{ headerShown: false }}>
      <UnAuthStack.Screen name="Login" component={LoginScreen} />
      <UnAuthStack.Screen name="Register" component={RegisterScreen} />
    </UnAuthStack.Navigator>
  );
};
export default UnAuthenticatedStack;
