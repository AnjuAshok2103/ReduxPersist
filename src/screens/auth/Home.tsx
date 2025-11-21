import { View, Text } from 'react-native';
import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthStackParams } from '@src/types';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type HomeScreenProps = NativeStackScreenProps<AuthStackParams, 'Home'>;
const Home = ({ route, navigation }: HomeScreenProps) => {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        backgroundColor: 'white',
      }}
    >
      <Text>Home</Text>
    </View>
  );
};

export default Home;
