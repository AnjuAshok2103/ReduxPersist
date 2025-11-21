/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import RootStackNav from '@src/navigation/root';
import { store } from '@store/store';
import { StatusBar, useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <AppContent />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

function AppContent() {
  return (
    <Provider store={store}>
      <RootStackNav />
    </Provider>
  );
}

export default App;
