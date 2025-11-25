import { View, Text, ScrollView, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthStackParams, Product } from '@src/types';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useAppDispatch, useAppSelector } from '@src/hooks';
import CustomButton from '@src/components/CustomButton';
import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';
import { addToCart, removeFromCart } from '@src/redux/features/cartSlice';

export const initialProduct = {
  id: 0,
  title: '',
  description: '',
  price: 0,
  discountPercentage: 0,
  rating: 0,
  stock: 0,
  brand: '',
  category: '',
  thumbnail: '',
  images: [],
  quantity: 0,
};
type DetailsScreenProps = NativeStackScreenProps<AuthStackParams, 'Details'>;
const Details = ({ navigation, route }: DetailsScreenProps) => {
  const insets = useSafeAreaInsets();
  const dispatch = useAppDispatch();
  const product = useAppSelector(state =>
    state.products.products?.products.find(
      p => p.id === route.params.productId,
    ),
  );
  const { cart, totalAmount } = useAppSelector(state => state.cart);
  const [currentItem, setCurrentItem] = useState<Product>(initialProduct);

  useEffect(() => {
    const itemChecking = () => {
      const isPresent = cart.find(item => item.id === product?.id);
      if (isPresent) {
        product?.id && setCurrentItem(isPresent);
      } else {
        setCurrentItem(initialProduct);
      }
    };
    itemChecking();
  }, [cart]);

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: '#fff',
      }}
      contentContainerStyle={{
        flex: 1,
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        backgroundColor: 'white',
        paddingHorizontal: 18,
      }}
    >
      {/* PRODUCT CARD */}
      <View
        style={{
          backgroundColor: '#f9f9f9',
          borderRadius: 15,
          padding: 15,
          shadowColor: '#000',
          shadowOpacity: 0.1,
          shadowRadius: 5,
          shadowOffset: { width: 0, height: 2 },
          elevation: 3,
        }}
      >
        {/* IMAGE */}
        <Image
          source={{ uri: product?.thumbnail }}
          style={{
            width: '100%',
            height: 180,
            borderRadius: 12,
            marginBottom: 15,
          }}
          resizeMode="cover"
        />

        {/* TITLE + PRICE */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 10,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: '700',
              width: '70%',
            }}
          >
            {product?.title}
          </Text>

          <Text
            style={{
              fontSize: 18,
              fontWeight: '700',
              color: '#444',
            }}
          >
            ${product?.price}
          </Text>
        </View>

        {/* INFO */}
        <Text style={{ fontSize: 14, marginBottom: 5 }}>
          <Text style={{ fontWeight: 'bold' }}>Category: </Text>
          {product?.category}
        </Text>

        <Text style={{ fontSize: 14, marginBottom: 5 }}>
          <Text style={{ fontWeight: 'bold' }}>Brand: </Text>
          {product?.brand}
        </Text>

        <Text style={{ fontSize: 14, marginBottom: 5 }}>
          <Text style={{ fontWeight: 'bold' }}>Description: </Text>
          {product?.description}
        </Text>

        <Text style={{ fontSize: 14, marginBottom: 5 }}>
          <Text style={{ fontWeight: 'bold' }}>Rating: </Text>
          {product?.rating}{' '}
          <MaterialDesignIcons name={'star'} size={15} color={'yellow'} />
        </Text>

        <Text style={{ fontSize: 14 }}>
          <Text style={{ fontWeight: 'bold' }}>Stock: </Text>
          {product?.stock}
        </Text>
      </View>

      {/* BUTTONS */}
      <View style={{ marginTop: 25 }}>
        {currentItem?.quantity ? (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <CustomButton
              buttonText="-"
              onPress={() => {
                dispatch(removeFromCart(product));
              }}
              style={{
                backgroundColor: '#f28c8c',
                marginBottom: 12,
              }}
            />
            <Text>{currentItem?.quantity}</Text>
            <CustomButton
              buttonText="+"
              onPress={() => {
                dispatch(addToCart(product));
              }}
              style={{
                backgroundColor: '#f28c8c',
                marginBottom: 12,
              }}
            />
          </View>
        ) : (
          <CustomButton
            mode="contained"
            buttonText="Add to Cart"
            onPress={() => {
              dispatch(addToCart(product));
            }}
            style={{
              backgroundColor: '#f28c8c',
              marginBottom: 12,
            }}
          />
        )}

        <CustomButton
          buttonText="View Cart"
          onPress={() => {
            navigation.getParent()?.navigate('Cart');
          }}
          style={{
            backgroundColor: '#f28c8c',
            marginBottom: 12,
          }}
        />
      </View>
    </ScrollView>
  );
};

export default Details;
