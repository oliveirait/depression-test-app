import React, { useCallback, useEffect, useState } from 'react';
import { Button, Center, Heading, Link, VStack, Text } from 'native-base';
import { useFocusEffect, useNavigation, CommonActions } from '@react-navigation/native';
import { Alert } from 'react-native';
import { HeadingButton } from '../components/HeadingButton';


export function Result({route}) {

  const { navigate, dispatch  } = useNavigation()

  var [res] = useState(route.params?.res);

  const handleHomePage = () => {
    navigate('home')
  }

  const getInfo = () => {
    if ( res > 13 ) {
      Alert.alert(
        'GRAU EXTREMAMENTE SEVERO',
        "Atenção! Essa é uma situação crítica! \n\nRecomendamos que você busque um psicólogo ou psiquiatra para diagnóstico adequado. O site vittude.com oferece mais de 1000 psicólogos espalhados pelo Brasil."
      )
    } 
    else if (res > 9) {
      Alert.alert(
        'GRAU SEVERO',
        'Fique atento! \n\nEste grau de severidade requer apoio de um profissional. Recomendamos que você busque um psicólogo ou psiquiatra para diagnóstico adequado. '
      )
    } 
    else if (res > 5) {
      Alert.alert(
        'GRAU MODERADO',
        'Sinal amarelo! \n\nÉ bom entender melhor se é fruto da situação ou algo mais grave. Fale online com um psicólogo. Acesse vittude.com e encontre um psicólogo para atendimento online. '
      )
    } 
    else if (res > 3) {
      Alert.alert(
        'GRAU SUAVE',
        'Nada sério por enquanto! \n\nPor hora você pode ler um pouco mais sobre a depressão. Acesse o site vittude.com e baixe grátis o e-book "Depressão, como ela é?".'
      )
    } else {
      Alert.alert(
        'GRAU NORMAL', 
        'Está tudo bem! \n\nSó fique atento a qualquer alteração de humor prolongada.'
      )
    }
  }

    useEffect(() => {
      getInfo()
    }, []) 
  

  

  return (
   <VStack flex={1} alignItems="center" bg="white" px={8} pt={24} >
    <VStack flex={1} alignItems={'center'} justifyContent={'center'}>

        <Center h={24}>
          <Heading textAlign={'center'}>Acesse o site Vittude para obter mais informações</Heading>
        </Center>

        <Heading alignItems={'center'} h={10}>
          <Link href='https://vittude.com' height={10}>vittude.com</Link>
        </Heading>
        
        
        <Button onPress={handleHomePage} m={3}>
          <HeadingButton > VOLTAR À PAGINA INICIAL </HeadingButton>
        </Button>
    </VStack>

    
    </VStack>
  );
}