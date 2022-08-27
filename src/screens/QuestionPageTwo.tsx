import React from 'react';
import { Heading, VStack } from 'native-base';
import { Button } from '../components/Button';
import { useNavigation } from '@react-navigation/native';

export function QuestionPageTwo() {

  const { goBack } = useNavigation()

  const handleGoBack = () => {
    goBack()
  }

  return (
    <VStack flex={1} alignItems={'center'} justifyContent={'center'} px={6}>
        <Heading>You are on Page Two</Heading>
        <Button onPress={ handleGoBack }  > GO BACK </Button> 
    </VStack>
  );
}