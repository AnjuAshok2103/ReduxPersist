import { View, Text } from 'react-native';
import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthBottomTabsParams } from '@src/types';
type CartScreenProps = NativeStackScreenProps<AuthBottomTabsParams, 'Cart'>;
const CartScreen = ({}: CartScreenProps) => {
  return (
    <View>
      <Text>Cart</Text>
    </View>
  );
};

export default CartScreen;
