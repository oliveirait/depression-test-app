import React, { useState } from 'react';
import { Alert } from 'react-native';
import { HStack, VStack, FlatList, Heading, Center, Radio, AlertDialog } from 'native-base';
import { Button } from '../components/Button';
import { useNavigation } from '@react-navigation/native';
import { HeadingButton } from '../components/HeadingButton';
import { Answer0, Answer1, Answer2, Answer3 } from '../components/home/choice';
import { Ask7 } from '../components/pages/answer';

export function Q7({route}) {

  const { navigate, goBack } = useNavigation() 
  const [select, setSelect] = useState('')

  const handleNextPage = (pg: any) => { 
    if (!select) {
     alert()
    } else {
      console.log(route.params?.res + parseInt(select))
      navigate(pg, { res: route.params?.res + parseInt(select) }) /* Enviando o resultado para proxima página */
    }
  }

  const handleGoBack = () => { goBack() }

  const alert = () => {
   Alert.alert('Resposta necessária', 'Não é possível avançar sem responder a questão')
  }

  return (
  <VStack flex={1}>


<VStack flex={1} justifyContent={'center'} alignItems={'center'} px={5}>
      
      <HStack>
        <Heading textAlign={'center'}> <Ask7/> </Heading>
      </HStack>
      
      <HStack mt={10} justifyContent={'center'} alignItems={'center'}>
          <Radio.Group name='Group 1' accessibilityLabel='Choice' value={select} onChange={setSelect}>    
            <VStack p={5} space={'xl'} >
                <Radio value={'0'} colorScheme="blue"> <Answer0/> </Radio>
                <Radio value={'1'} colorScheme="green"> <Answer1/>  </Radio>
                <Radio value={'2'} colorScheme="yellow"> <Answer2/> </Radio>
                <Radio value={'3'} colorScheme="red"> <Answer3/> </Radio>
            </VStack>
          </Radio.Group>
      </HStack>
   
  </VStack>

    <VStack alignItems={'center'} justifyContent={'center'} px={8} pb={5}>
        <HStack w={'50%'} justifyContent={'center'} alignItems={'center'}  >
              <Button onPress={handleGoBack} m={3}>
                <HeadingButton> VOLTAR </HeadingButton>
              </Button>
              <Button onPress={() => handleNextPage('result')} m={3}>
                <HeadingButton> PROXIMO </HeadingButton>
            </Button>
          </HStack>
    </VStack>
  </VStack>
    
  );
}