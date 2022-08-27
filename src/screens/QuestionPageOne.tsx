import React from 'react';
import { Box, Heading, HStack, VStack } from 'native-base';
import { Button } from '../components/Button';
import { useNavigation } from '@react-navigation/native';
import { HeadingButton } from '../components/HeadingButton';

export function QuestionPageOne() {

  const { navigate, goBack } = useNavigation()

  const handleNextPage = (pg: any) => {
    navigate(pg)
  }

  const handleGoBack = () => {
    goBack()
  }

  return (
    <VStack w={'full'} flex={1} alignItems="center" bg="white" px={8} pt={24} >

        <HStack alignItems={'center'} >
          <HeadingButton pb={5} color={'black'} fontSize={30} > You are on Page One </HeadingButton>
        </HStack>


        <HStack flex={1} justifyContent={'center'} alignItems={'flex-end'} pb={10}>
          <Box>
            <Button onPress={ () => handleNextPage('question_page_two') } mb={2}> 
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