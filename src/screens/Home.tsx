import React from 'react';
import { Box, Center, Divider, Heading, HStack, Image, VStack } from 'native-base';
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
        size={100} />
    )
  }

  return (
      <VStack flex={1} bg='white'>
    
        <Center flex={1} mt={'50%'} mb={'1%'}>
          <MainTitle/>
          { !logoLoaded ? <Loading/> : <Logo/> } 
          <MainInfo/>
          <MainOptionsTitle/>
          <MainOptions/>
          <MainAlert/>
        </Center>

        <Button onPress={ () => handleNextPage('q1') } mt={'50%'}> 
          <HeadingButton> INICIAR TESTE </HeadingButton>
        </Button> 

      </VStack>
      
  );
}