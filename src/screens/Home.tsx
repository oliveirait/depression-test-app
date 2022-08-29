import React from 'react';
import { HStack, VStack } from 'native-base';
import { Button } from '../components/Button';
import { useNavigation } from '@react-navigation/native';
import { HeadingButton } from '../components/HeadingButton';
import { MainTitle, MainInfo, MainOptionsTitle, MainOptions, MainAlert } from '../components/home/main'; 

export function Home() {

  const { navigate } = useNavigation()

  const handleNextPage = (pg: any) => {
    navigate(pg)
  }

  return (
    <VStack flex={1} alignItems="center" bg="white" px={8} pt={24} >

      <VStack pt={15}>
        <MainTitle />
        <MainInfo />
        <MainOptionsTitle />
        <MainOptions />
        <MainAlert />
      </VStack>

      <HStack flex={1} justifyContent={'center'} alignItems={'flex-end'} pb={10}>
        <Button onPress={ () => handleNextPage('q1') }  > 
          <HeadingButton> INICIAR TESTE </HeadingButton>
        </Button> 
      </HStack>

    </VStack>
  );
}