import React from 'react';
import { NativeBaseProvider, StatusBar } from "native-base"; 
import { THEME } from "./src/styles/Theme"; /* Token de cores do app */
import { AppContainer } from "./src/routes/AppContainer"; /* Provê container do app */
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { Loading } from './src/components/Loading';

export default function App() {

  const [fontsLoad] = useFonts( {Roboto_400Regular, Roboto_700Bold} )

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar barStyle="light-content" translucent />
      { fontsLoad ? <AppContainer /> : <Loading /> }
    </NativeBaseProvider >
  );
}