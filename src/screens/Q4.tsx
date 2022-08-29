import React from 'react';
import { Box, HStack, VStack } from 'native-base';
import { Button } from '../components/Button';
import { useNavigation } from '@react-navigation/native';
import { HeadingButton } from '../components/HeadingButton';

export function Q4() {

  const { navigate, goBack } = useNavigation()

  const handleNextPage = (pg: any) => {
    navigate(pg)
  }

  const handleGoBack = () => {
    goBack()
  }

  return (
    <VStack flex={1} alignItems="center" bg="white" px={8} pt={24} >

        <HStack alignItems={'center'} >
          <HeadingButton pb={5} color={'black'} fontSize={30} > 4 </HeadingButton>
        </HStack>


        <HStack flex={1} justifyContent={'center'} alignItems={'flex-end'} pb={10}>
          <Box>
            <Button onPress={ () => handleNextPage('q5') } mb={2}> 
              <HeadingButton> PROXIMO </HeadingButton>
            </Button> 
            <Button onPress={ handleGoBack }> 
              <HeadingButton> VOLTAR </HeadingButton>
            </Button>
          </Box>
        </HStack>


    </VStack>
  );
}