import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { AuthBottomTabsParams, Product } from '@src/types';
import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import CustomButton from './CustomButton';
import { useAppDispatch, useAppSelector } from '@src/hooks';
import { initialProduct } from '@src/screens/auth/Details';
import { addToCart, removeFromCart } from '@src/redux/features/cartSlice';

const ProductCardInCart = ({
  item,
  navigation,
}: {
  item: Product;
  navigation: BottomTabNavigationProp<AuthBottomTabsParams, 'Cart'>;
}) => {
  const dispatch = useAppDispatch();
  const { cart, totalAmount } = useAppSelector(state => state.cart);
  const [currentItem, setCurrentItem] = useState<Product>(initialProduct);
  return (
    <TouchableOpacity
      onPress={() => {}}
      style={{
        gap: 10,
        backgroundColor: '#ece4e5ff',
        height: 150,
        marginBottom: 10,
        borderRadius: 10,
        padding: 10,
        flexDirection: 'row',
      }}
    >
      <View style={{ flex: 1, backgroundColor: 'black', borderRadius: 10 }}>
        <Image
          source={{ uri: item.thumbnail }}
          style={{ width: '100%', height: '100%' }}
          resizeMode="cover"
        />
      </View>

      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <View
          style={{
            flex: 1,
            gap: 4,
          }}
        >
          <Text style={{ fontSize: 14, fontWeight: '500' }}>
            {item.category}
          </Text>
          <Text
            style={{ fontSize: 16, fontWeight: '700' }}
          >{`$${item.price}`}</Text>
        </View>

        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <TouchableOpacity
            onPress={() => {
              dispatch(removeFromCart(item));
            }}
            style={{
              backgroundColor: '#f28c8c',
              marginBottom: 12,
              borderRadius: 10,
              paddingVertical: 10,
              paddingHorizontal: 15,
              justifyContent: 'center',
            }}
          >
            <Text style={{ textAlign: 'center' }}>{'-'}</Text>
          </TouchableOpacity>
          <View>
            <Text
              style={{ textAlign: 'center', fontSize: 16, fontWeight: '800' }}
            >
              {item?.quantity}
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              dispatch(addToCart(item));
            }}
            style={{
              backgroundColor: '#f28c8c',
              borderRadius: 10,
              paddingVertical: 10,
              paddingHorizontal: 15,
              justifyContent: 'center',
            }}
          >
            <Text style={{ textAlign: 'center' }}>{'+'}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCardInCart;
