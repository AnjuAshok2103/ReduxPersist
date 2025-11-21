import { View, Text } from 'react-native';
import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthBottomTabsParams } from '@src/types';
type ProfileScreenProps = NativeStackScreenProps<
  AuthBottomTabsParams,
  'Profile'
>;
const Profile = ({}: ProfileScreenProps) => {
  return (
    <View>
      <Text>Profile</Text>
    </View>
  );
};

export default Profile;
