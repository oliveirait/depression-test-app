import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppRoutesStack } from './AppRoutesStack';
import { AppRoutesNativeStack } from './AppRoutesNativeStack';

export function AppContainer() {
  return (
    <NavigationContainer>
      <AppRoutesNativeStack/>
    </NavigationContainer>
  );
}