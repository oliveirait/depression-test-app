import React, { useState } from 'react';
import { Alert } from 'react-native';
import { HStack, VStack, FlatList, Heading, Center, Radio, Box } from 'native-base';
import { Button } from '../components/Button';
import { useNavigation } from '@react-navigation/native';
import { HeadingButton } from '../components/HeadingButton';
import { Answer0, Answer1, Answer2, Answer3 } from '../components/home/choice';
import { Ask1 } from '../components/pages/answer';
import { AntDesign } from '@expo/vector-icons';

export function Q2() {

  const { navigate, goBack } = useNavigation()
  const [select, setSelect] = useState('')

  const value0 = '0'
  const value1 = '1'
  const value2 = '2'
  const value3 = '3'

  const variant0: string = select === value0 ? 'outline' : 'solid'
  const variant1: string = select === value1 ? 'outline' : 'solid'
  const variant2: string = select === value2 ? 'outline' : 'solid'
  const variant3: string = select === value3 ? 'outline' : 'solid'

  const setBg0 = select === value0 ? 'green.300' : 'white'
  const bH0 = select === value0 ? 1 : 0
  const bC0 = select === value0 ? 'black' : 'white'

  const setBg1 = select === value1 ? 'green.300' : 'white'
  const bH1 = select === value1 ? 1 : 0
  const bC1 = select === value1 ? 'black' : 'white'

  const setBg2 = select === value2 ? 'green.300' : 'white'
  const bH2 = select === value2 ? 1 : 0
  const bC2 = select === value2 ? 'black' : 'white'

  const setBg3 = select === value3 ? 'green.300' : 'white'
  const bH3 = select === value3 ? 1 : 0
  const bC3 = select === value3 ? 'black' : 'white'

  const handleNextPage = (pg: any) => {
    if (!select) {
      alert()
    } else {
      console.log(select)
      navigate(pg, { res: parseInt(select) }) /* Enviando o resultado para proxima página */
    }
  }

  function setNunca() { 
    return (
        <Radio size={8} value={value0} colorScheme="yellow"><Answer0 /></Radio>
    )
  }
  function setAsVezes() {
    return (
        <Radio size={8} value={value1} colorScheme="yellow" ><Answer1 /></Radio>
    )
  }
  function setFrequente() {
    return (
        <Radio size={8} value={value2} colorScheme="yellow"><Answer2 /></Radio>
    )
  }
  function setSempre() {
    return (
        <Radio size={8} value={value3} colorScheme="yellow"><Answer3 /></Radio>
    )
  }

  const handleGoBack = () => { goBack() }

  const alert = () => {
    Alert.alert('Resposta necessária', 'Não é possível avançar sem responder a questão')
  }

  return (
    <VStack flex={1}>

      <VStack flex={1} justifyContent={'center'} alignItems={'center'}>

        <HStack>
          <Heading textAlign={'center'}> <Ask1 /> </Heading>
        </HStack>

        <VStack mt={10} justifyContent={'center'} alignItems={'center'}>
          <Radio.Group name='Group 1' accessibilityLabel='Choice' value={select} onChange={setSelect}>
            <VStack p={5} space={'2xl'} >

              <Center>
                <Button  bg={setBg0} borderWidth={bH0} borderColor={bC0} variant={variant0} justifyContent={'space-between'} alignItems={'center'} >
                    {setNunca()}
                  </Button>
              </Center>

              <Center>
                <Button bg={setBg1} borderWidth={bH1} borderColor={bC1} variant={variant1} justifyContent={'space-between'} alignItems={'center'} >
                  {setAsVezes()}
                </Button>
              </Center>

              <Center>
                <Button bg={setBg2} borderWidth={bH2} borderColor={bC2} variant={variant2} justifyContent={'space-between'} alignItems={'center'} >
                    {setFrequente()}
                </Button>
              </Center>

              <Center>

                  <Button bg={setBg3} borderWidth={bH3} borderColor={bC3} variant={variant3} justifyContent={'space-between'} alignItems={'center'}>
                    {setSempre()}
                  </Button>

              </Center>

             </VStack>
          </Radio.Group>
        </VStack>

      </VStack>

      <VStack alignItems={'center'} justifyContent={'center'} px={8} pb={5}>
        <HStack w={'50%'} justifyContent={'center'} alignItems={'center'}  >

        
          <Button onPress={handleGoBack} m={3}>
            <HStack justifyContent={'space-between'} alignItems={'center'}>
                  <AntDesign name="leftcircleo" size={24} color="white" /> 
                  <HeadingButton ml={8}> VOLTAR </HeadingButton>
            </HStack>
          </Button>
          

          <Button onPress={() => handleNextPage('q2')} m={3}>
            <HStack justifyContent={'space-between'} alignItems={'center'}>
              <HeadingButton mr={8}> PROXIMO </HeadingButton>
              <AntDesign name="rightcircleo" size={24} color="white" />
            </HStack>
          </Button>

        </HStack>
      </VStack>
    </VStack>

  );
}