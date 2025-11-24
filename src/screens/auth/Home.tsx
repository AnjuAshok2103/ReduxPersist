import { View, Text, FlatList } from 'react-native';
import React, { useEffect } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthStackParams } from '@src/types';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useAppDispatch, useAppSelector } from '@src/hooks';
import { getAllProducts } from '@src/redux/features/productsSlice';
import { ActivityIndicator } from 'react-native-paper';
import ProductsCard from '@src/components/ProductsCard';

type HomeScreenProps = NativeStackScreenProps<AuthStackParams, 'Home'>;
const Home = ({ route, navigation }: HomeScreenProps) => {
  const insets = useSafeAreaInsets();
  const dispatch = useAppDispatch();
  const { products, isSuccess, isLoading } = useAppSelector(
    state => state.products,
  );

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);
  console.log('products in home', products);
  if (isLoading && !products) {
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
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        backgroundColor: 'white',
        paddingHorizontal: 18,
      }}
    >
      <FlatList
        data={products?.products}
        renderItem={item => (
          <ProductsCard item={item.item} navigation={navigation} />
        )}
      />
    </View>
  );
};

export default Home;
