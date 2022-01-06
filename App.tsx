import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Provider } from 'react-redux';

// import the store and the root reducer
import { Store } from './src/store';
// import file navigation
import { Navigation } from './src/navigation/Navigation';


export default function App() {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Navigation />
        <StatusBar style="dark" />
      </NavigationContainer>
    </Provider>
  );
}


