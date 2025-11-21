import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthBottomTabsParams, AuthStackParams } from '@src/types';
import HomeScreen from '@src/screens/auth/Home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from '@src/screens/auth/Profile';
import CartScreen from '@src/screens/auth/Cart';
import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';

const AuthStack = createNativeStackNavigator<AuthStackParams>();
const AuthBottomTab = createBottomTabNavigator<AuthBottomTabsParams>();
const AuthenticatedBottomTab = () => {
  const tabBarIcon = ({
    route,
    color,
    size,
    focused,
  }: {
    color: any;
    size: number;
    route: any;
    focused: boolean;
  }) => {
    let iconName = 'account-circle';

    if (route.name === 'Home') {
      focused ? (iconName = 'home') : (iconName = 'home-outline');
    } else {
      focused ? (iconName = 'cart') : (iconName = 'cart-outline');
    }
    return (
      <MaterialDesignIcons name={iconName as any} size={size} color={color} />
    ) as React.ReactNode;
  };
  return (
    <AuthBottomTab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) =>
          tabBarIcon({ focused, route, color, size }),
      })}
    >
      <AuthBottomTab.Screen name="Home" component={AuthenticatedStack} />
      <AuthBottomTab.Screen name="Cart" component={CartScreen} />
    </AuthBottomTab.Navigator>
  );
};
const AuthenticatedStack = () => {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="Home" component={HomeScreen} />
      <AuthStack.Screen name="Profile" component={Profile} />
    </AuthStack.Navigator>
  );
};
export default AuthenticatedBottomTab;
