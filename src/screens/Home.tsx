import React from 'react';
import { Heading, VStack } from 'native-base';
import { Button } from '../components/Button';
import { useNavigation } from '@react-navigation/native';

export function Home() {

  const navigation = useNavigation()

  const handleNextPage = (pg: any) => {
    return navigation.navigate(pg)
  }

  return (
    <VStack flex={1} alignItems={'center'} justifyContent={'center'} px={6} >
        <Heading pb={5} > Welcome! </Heading>
        <Button onPress={ () => handleNextPage('question_page_one') } > Next Page </Button> 
    </VStack>
  );
}