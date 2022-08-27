import React from 'react';
import { Box, HStack, VStack } from 'native-base';
import { Button } from '../components/Button';
import { useNavigation } from '@react-navigation/native';
import { HeadingButton } from '../components/HeadingButton';

export function Home() {

  const { navigate } = useNavigation()

  const handleNextPage = (pg: any) => {
    navigate(pg)
  }

  return (
    <VStack w={'full'} flex={1} alignItems="center" bg="white" px={8} pt={24} >

      <VStack pt={15}>
        <HeadingButton pb={5} color={'black'} fontSize={30}> 
          Seja bem vindo(a) ao{'\n'} 
          Teste de Depressão
        </HeadingButton>
        <Box>
          <HeadingButton pb={5} pt={5} color={'black'} fontSize={16}> 
            Esta é uma ferramenta de saúde que avalia a gravidade dos sintomas comportamentais e emocionais
            que estão correlacionados com depressão.
            ao teste de depressão.
          </HeadingButton>
        </Box>
        <Box>
          <HeadingButton pb={5} pt={5} fontSize={16} color={'blue.800'}> 
            Existem 7 itens que precisam ser pontuados conforme listado abaixo e o teste geralmente leva cerca de 1 minuto:
          </HeadingButton>
        </Box>
        <Box>
          <HeadingButton pb={5} pt={5} color={'black'} fontSize={16} fontWeight={'thin'} >
            0 - NUNCA - Não se aplica a mim de forma alguma {'\n'}
            1 - ÀS VEZES - Aplica-se a mim em algum grau, ou parte do tempo {'\n'}
            2 - FREQUENTEMENTE - Aplica-se a mim em um grau considerável, ou boa parte do tempo {'\n'}
            3 - QUASE SEMPRE- Aplica-se muito a mim, ou na maioria das vezes {'\n'}
          </HeadingButton>
        </Box>
        <Box bgColor={'amber.100'} borderRadius={10} p={2} >
          <HeadingButton pb={5} pt={5} color={'black'} fontSize={16} fontWeight={'light'}>
            O avaliador aconselha o paciente a considerar a primeira resposta que lhe vier à cabeça.
          </HeadingButton>
        </Box>
      </VStack>

      <HStack flex={1} justifyContent={'center'} alignItems={'flex-end'} pb={10}>
        <Button onPress={ () => handleNextPage('question_page_one') }  > 
          <HeadingButton> INICIAR TESTE </HeadingButton>
        </Button> 
      </HStack>

    </VStack>
  );
}