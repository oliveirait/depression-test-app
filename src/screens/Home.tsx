import React from 'react';
import { Box, Center, Heading, HStack, Image, VStack } from 'native-base';
import { Button } from '../components/Button';
import { useNavigation } from '@react-navigation/native';
import { HeadingButton } from '../components/HeadingButton';
import { MainTitle, 
          MainInfo, 
          MainOptionsTitle, 
          MainOptions, 
          MainAlert } from '../components/home/main'; 
import { Loading } from '../components/Loading';

export function Home() {

  const { navigate } = useNavigation()
  const handleNextPage = (pg: any) => { navigate(pg) }
  const logoLoaded = require('../assets/home/depression.png')

  function Logo() {
    return(
      <Image
        source={logoLoaded} 
        alt={'Depression Test'}
        resizeMode={'contain'}
        size={150} />
    )
  }

  return (
    <VStack w='100%' h='100%' bg='white' >

        <Center pt={24}>
         <MainTitle/>
        </Center>

        <VStack px={8} mt={5} justifyContent={'center'} alignItems={'center'} mb={5}>
          { !logoLoaded ? <Loading/> : <Logo/> } 
        </VStack>

        <VStack flex={1} alignItems="center" px={8} >
          <MainInfo/>
          <MainOptionsTitle/>
          <MainOptions/>
          <MainAlert/>
        </VStack>

      <VStack m={5}>
          <Button onPress={ () => handleNextPage('q1') }  > 
              <HeadingButton> INICIAR TESTE </HeadingButton>
          </Button> 
      </VStack>

    </VStack>
 
  );
}