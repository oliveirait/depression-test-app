import { Box, Center, VStack } from 'native-base';
import React from 'react';
import { HeadingButton } from '../HeadingButton';

const w = '90%'
const h = '90%'
const margin = 2
const fontzise = 16

export const MainTitle = () => {
    return (
      
        <HeadingButton mt={'10%'} pb={5} color={'black'} fontSize={30}> 
              Teste de Depressão
          </HeadingButton>
  
    );
  }

export const MainInfo = () => {
  return (

        <HeadingButton m={margin} pb={2} pt={2} color={'black'} fontSize={fontzise}> 
            Esta é uma ferramenta de saúde que avalia a gravidade dos sintomas comportamentais e emocionais
            que estão correlacionados a depressão.
        </HeadingButton>
      
  );
}

export const MainOptionsTitle = () => {
  return (
 
          <HeadingButton m={margin}   pb={2} pt={2} fontSize={fontzise} color={'blue.800'}> 
              Existem 7 itens que precisam ser pontuados conforme listado abaixo
              e o teste leva cerca de 1 minuto:
          </HeadingButton>        
        
  );
}

export const MainOptions = () => {
    return (

          <HeadingButton m={margin}  color={'black'} fontSize={fontzise} fontWeight={'bold'}>
              0 - NUNCA - Não se aplica a mim {'\n'}
              1 - ÀS VEZES - Aplica-se a mim em algum grau {'\n'}
              2 - FREQUENTEMENTE - Aplica-se a mim com frequencia {'\n'}
              3 - QUASE SEMPRE - Aplica-se muito a mim {'\n'}
          </HeadingButton>
    );
  }


export const MainAlert = () => {
    return (
      <Center  bgColor={'amber.100'} borderRadius={10} borderWidth={0} >
          <HeadingButton p={2} color={'black'} fontSize={fontzise} fontWeight={'light'}>
              O avaliador aconselha o paciente a considerar a primeira resposta que lhe vier à cabeça.
          </HeadingButton>
      </Center>
      
    );
}
