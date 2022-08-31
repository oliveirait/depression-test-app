import React, { useState } from 'react';
import { AlertDialog, Center, FlatList, HStack, VStack } from 'native-base';
import { Button } from '../components/Button';
import { useNavigation } from '@react-navigation/native';
import { HeadingButton } from '../components/HeadingButton';
import { MainTitle, MainInfo, MainOptionsTitle, MainOptions, MainAlert } from '../components/home/main'; 


export function Home() {

  const { navigate } = useNavigation()

  const handleNextPage = (pg: any) => { navigate(pg) }

  return (

        <VStack flex={1} alignItems="center" bg="white" px={8} pt={24} >

        <HStack alignItems={'center'} >
          <VStack>
            <MainTitle/>
            <MainInfo/>
            <MainOptionsTitle/>
            <MainOptions/>
            <MainAlert/>
          </VStack>
        </HStack>


        <HStack w={'100%'} flex={1} justifyContent={'center'} alignItems={'flex-end'} pb={5}>
          <Button onPress={ () => handleNextPage('q1') }  > 
            <HeadingButton> INICIAR TESTE </HeadingButton>
          </Button> 
        </HStack>

        </VStack>
  );
}