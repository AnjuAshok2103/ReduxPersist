import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { AuthStackParams, Product } from '@src/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const ProductsCard = ({
  item,
  navigation,
}: {
  item: Product;
  navigation: NativeStackNavigationProp<AuthStackParams, 'Home'>;
}) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Details', { productId: item.id })}
      style={{
        gap: 10,
        backgroundColor: '#ece4e5ff',
        height: 250,
        marginBottom: 10,
        borderRadius: 10,
        padding: 10,
      }}
    >
      <View style={{ flex: 3, backgroundColor: 'black', borderRadius: 10 }}>
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
          alignItems: 'center',
        }}
      >
        <Text>{item.category}</Text>
        <Text>{`$${item.price}`}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ProductsCard;
