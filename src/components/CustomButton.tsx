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
    <Button
      theme={{ roundness: 2 }}
      icon={icon}
      mode={mode || 'contained'}
      onPress={onPress}
      style={{ borderRadius: 25, ...style }} // outer container (spacing)
      contentStyle={{
        paddingVertical: 4, // size of button
      }}
      rippleColor="rgba(255,255,255,0.3)" // ripple visible everywhere
      textColor="#fff"
      buttonColor="#303060"
    >
      {buttonText}
    </Button>
  );
};

export default CustomButton;
