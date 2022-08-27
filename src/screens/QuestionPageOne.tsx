import React from 'react';
import { Heading, VStack } from 'native-base';
import { Button } from '../components/Button';
import { useNavigation } from '@react-navigation/native';

export function QuestionPageOne() {

  const { navigate } = useNavigation()

  const handleNextPage = (pg: any) => {
    navigate(pg)
  }

  return (
    <VStack flex={1} alignItems={'center'} justifyContent={'center'} px={6}>
        <Heading>You are on Page One</Heading>
        <Button onPress={ () => handleNextPage('question_page_two') }  > Next Page </Button> 
    </VStack>
  );
}