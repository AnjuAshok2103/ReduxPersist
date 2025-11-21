import { View, Text } from 'react-native';
import React from 'react';
import { Button } from 'react-native-paper';
import { CustomButtonProps } from '@src/types';

const CustomButton = ({
  buttonText,
  mode,
  icon,
  onPress,
  style,
}: CustomButtonProps) => {
  return (
    <View>
      <Button
        theme={{ roundness: 2 }}
        icon={icon}
        mode={mode || 'text'}
        onPress={onPress}
        style={{ ...style }}
        textColor="#fff"
        buttonColor="#303060"
      >
        {buttonText}
      </Button>
    </View>
  );
};

export default CustomButton;
