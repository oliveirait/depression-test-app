import React, { useState } from 'react';
import { Alert } from 'react-native';
import { HStack, VStack, FlatList, Heading, Center, Radio, Box } from 'native-base';
import { Button } from '../components/Button';
import { useNavigation } from '@react-navigation/native';
import { HeadingButton } from '../components/HeadingButton';
import { Answer0, Answer1, Answer2, Answer3 } from '../components/home/choice';
import { Ask1 } from '../components/pages/answer';
import { AntDesign } from '@expo/vector-icons';

export function Q1() {

  const { navigate, goBack } = useNavigation()
  const [select, setSelect] = useState('')
  const choice1: boolean = select === '0' ? false : true
  const choice2: boolean = select === '1' ? false : true
  const choice3: boolean = select === '2' ? false : true
  const choice4: boolean = select === '3' ? false : true

  function somar() {
    return (
      <h1>Felipe</h1>
    )
  }

  const handleNextPage = (pg: any) => { 
    if (!select) {
     alert()
    } else {
      console.log(select)
      navigate(pg, { res: parseInt(select) }) /* Enviando o resultado para proxima página */
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
          <Heading textAlign={'center'}> <Ask1/> </Heading>
        </HStack>
        
        <HStack mt={10} justifyContent={'center'} alignItems={'center'}>
            <Radio.Group name='Group 1' accessibilityLabel='Choice' value={select} onChange={setSelect}>    
              <VStack p={5} space={'xl'} >

                <Button isDisabled={choice1}  >
                  <Radio value={'0'} colorScheme="blue"> <Answer0/> </Radio>
                </Button>

                <Button isDisabled={choice2}  >
                  <Radio value={'1'} colorScheme="green"> <Answer1/>  </Radio>
                </Button>

                <Button isDisabled={choice3}  >
                  <Radio value={'2'} colorScheme="yellow"> <Answer2/> </Radio>
                </Button>

                <Button isDisabled={choice4}  >
                  <Radio value={'3'} colorScheme="red"> <Answer3/> </Radio>
                </Button>

              </VStack>
            </Radio.Group>
        </HStack>
     
    </VStack>

    <VStack alignItems={'center'} justifyContent={'center'} px={8} pb={5}>
        <HStack w={'50%'} justifyContent={'center'} alignItems={'center'}  >

              <Button onPress={handleGoBack} m={3}>
                <HStack justifyContent={'space-between'} alignItems={'center'}>
                  <HeadingButton> VOLTAR </HeadingButton>
                  <AntDesign name="rightcircleo" size={24} color="white" />
                </HStack>
              </Button>

              <Button onPress={() => handleNextPage('q2')} m={3}>
                <HStack justifyContent={'space-between'} alignItems={'center'}>
                  <HeadingButton> PROXIMO </HeadingButton>
                  <AntDesign name="rightcircleo" size={24} color="white" />
                </HStack>
              </Button>
          
          </HStack>
    </VStack>
  </VStack>
    
  );
}