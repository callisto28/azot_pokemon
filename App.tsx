import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Navigation } from './src/navigation/Navigation';


export default function App() {
  return (
    <NavigationContainer>
      <Navigation />
      <StatusBar style="dark" />
    </NavigationContainer>
  );
}


