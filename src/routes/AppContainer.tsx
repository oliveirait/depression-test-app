import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Stack, NativeStack } from './AppRoutes';

export function AppContainer() {
  return (
    <NavigationContainer>
      <Stack/>
    </NavigationContainer>
  );
}