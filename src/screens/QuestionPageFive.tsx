import React from 'react';
import { Box, HStack, VStack } from 'native-base';
import { Button } from '../components/Button';
import { useNavigation } from '@react-navigation/native';
import { HeadingButton } from '../components/HeadingButton';

export function QuestionPageFive() {

  const { goBack } = useNavigation()

  const handleGoBack = () => {
    goBack()
  }

  return (
    <VStack w={'full'} flex={1} alignItems="center" bg="white" px={8} pt={24}>

        <HeadingButton pb={5} color={'black'} fontSize={30}> 5 </HeadingButton>
        
        <HStack flex={1} justifyContent={'center'} alignItems={'flex-end'} pb={10}>
          <Box>
            <Button onPress={ handleGoBack } > 
              <HeadingButton> VOLTAR</HeadingButton>
            </Button>
          </Box>
        </HStack>
        
        
    </VStack>
  );
}