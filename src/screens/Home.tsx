import React from 'react';
import { Box, Center, Image, VStack } from 'native-base';
import { Button } from '../components/Button';
import { useNavigation } from '@react-navigation/native';
import { HeadingButton } from '../components/HeadingButton';
import { MainTitle, 
          MainInfo, 
          MainOptionsTitle, 
          MainOptions, 
          MainAlert } from '../components/home/main';

export function Home() {

  const { navigate } = useNavigation()
  const handleNextPage = (pg: any) => { navigate(pg) }
  const logoLoaded = require('../assets/home/depression.png')

  function Logo() {
    return(
      <Image
        source={logoLoaded} 
        alt={'Depression'}
        resizeMode={'contain'}
        size={100} />
    )
  }

  return (
      <VStack flex={1} bg='white'>
    
        <Center flex={1} mt={'50%'} mb={'1%'}>
          <MainTitle/>
          <Logo/>
          <MainInfo/>
          <MainOptionsTitle/>
          <MainOptions/>
          <MainAlert/>
        </Center>

        <Button borderRadius={0} onPress={ () => handleNextPage('q1') } mt={'50%'}> 
          <HeadingButton> INICIAR TESTE </HeadingButton>
        </Button> 

      </VStack>
      
  );
}