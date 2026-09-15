import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ThemeProvider } from './src/context/ThemeContext';
import TabsNavigator from './src/navigation/TabsNavigator';

export default function App() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <TabsNavigator />
        </NavigationContainer>
      </ThemeProvider>
  );
}

