module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@src': './src',
          '@navigation': './src/navigation',
          '@screens': './src/screens',
          '@features': './src/redux/features',
          '@store': './src/redux/store',
          '@types': './src/types',
          '@utils': './src/utils',
          '@hooks': './src/hooks',
          '@components': './src/components',
        },
      },
    ],
  ],
};