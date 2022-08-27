import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppRoutes } from './AppRoutes';

export function AppContainer() {
  return (
    <NavigationContainer>
      <AppRoutes/>
    </NavigationContainer>
  );
}