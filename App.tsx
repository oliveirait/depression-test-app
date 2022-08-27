import React from 'react';
import { NativeBaseProvider } from "native-base"; 
import { THEME } from "./src/styles/Theme"; /* Token de cores do app */
import { AppContainer } from "./src/routes/AppContainer"; /* Provê container do app */

export default function App() {
  return (
    <NativeBaseProvider theme={THEME}>
        <AppContainer />
    </NativeBaseProvider>
  );
}