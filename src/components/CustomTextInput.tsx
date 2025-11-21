import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, HelperText } from 'react-native-paper';
import { Controller } from 'react-hook-form';
import { CustomTextInputProps } from '@src/types';

const CustomTextInput = ({
  // react-hook-form props
  control,
  name,
  rules = {}, // Optional: Add validation rules here

  // react-native-paper TextInput props
  label,
  placeholder,
  style,
  keyboardType = 'default',
  secureTextEntry = false,
  right,
  ...rest
}: CustomTextInputProps) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({
        field: { onChange, onBlur, value },
        fieldState: { error },
      }) => (
        <View style={styles.container}>
          <TextInput
            theme={{ roundness: 2, colors: { primary: '#000' } }}
            label={label}
            placeholder={placeholder}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            error={!!error} // Set error prop for styling
            mode="outlined" // Use 'outlined' or 'flat' style
            keyboardType={keyboardType}
            secureTextEntry={secureTextEntry}
            style={{ ...styles.input, color: '#000', backgroundColor: '#fff' }}
            outlineStyle={{ borderColor: '#000' }}
            placeholderTextColor={'#cccddd'}
            right={right}
            autoCorrect={false}
            {...rest}
          />

          {/* Display error message if it exists */}
          <HelperText type="error" visible={!!error}>
            {error ? error.message : ' '}
          </HelperText>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 0, // HelperText adds vertical space, so keep this low
  },
  input: {
    // Custom input styling if needed
    color: '#000',
    outlineColor: '#000',
  },
});

export default CustomTextInput;
