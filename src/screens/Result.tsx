import React, { useEffect, useState } from 'react';
import { Button, Center, Heading, Input, Link, TextField, VStack } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';
import { HeadingButton } from '../components/HeadingButton';


export function Result({route}) {

  const { navigate, dispatch  } = useNavigation()

  const [res] = useState(route.params?.res);

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
    <VStack flex={1} bg='white' >

        <Center flex={1} mt={'50%'} mb={'50%'}>
          <Heading mb={10} textAlign={'center'}>
            Acesse o site Vittude para obter mais informações
          </Heading>

          <Button>
            <Link href='https://vittude.com'>
              <Heading color={'white'}>vittude.com</Heading>
            </Link>
          </Button>

        </Center>

        <Button borderRadius={0} onPress={handleHomePage} size={14} w={'full'} mt={'50%'}>
          <HeadingButton > PAGINA INICIAL </HeadingButton>
        </Button>

    </VStack>

  
  );
}