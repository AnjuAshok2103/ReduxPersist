import { View, Text, FlatList, Alert } from 'react-native';
import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthBottomTabsParams } from '@src/types';
import { useAppDispatch, useAppSelector } from '@src/hooks';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import ProductCardInCart from '@components/ProductCardInCart';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import CustomButton from '@src/components/CustomButton';
import { clearCart } from '@src/redux/features/cartSlice';
type CartScreenProps = BottomTabScreenProps<AuthBottomTabsParams, 'Cart'>;
const CartScreen = ({ navigation, route }: CartScreenProps) => {
  const insets = useSafeAreaInsets();
  const dispatch = useAppDispatch();
  const { cart, totalAmount } = useAppSelector(state => state.cart);

  const handleCheckout = () => {
    Alert.alert('Order successfull!', '', [
      {
        text: 'ok',
        style: 'cancel',
        onPress: () => {
          dispatch(clearCart());
          navigation.navigate('Dashboard');
        },
      },
    ]);
  };
  return (
    <View
      style={{
        flex: 1,
        paddingTop: insets.top,
        paddingBottom: insets.bottom / 2,
        backgroundColor: 'white',
        paddingHorizontal: 18,
      }}
    >
      <FlatList
        data={cart}
        renderItem={item => (
          <ProductCardInCart item={item.item} navigation={navigation} />
        )}
      />
      <View style={{ gap: 10 }}>
        <Text
          style={{ textAlign: 'center', fontWeight: '800', fontSize: 24 }}
        >{`$${totalAmount.toFixed(2)}`}</Text>
        <CustomButton
          buttonText="Proceed to checkout"
          onPress={() => {
            handleCheckout();
          }}
          style={{
            backgroundColor: '#f28c8c',
          }}
        />
      </View>
    </View>
  );
};

export default CartScreen;
