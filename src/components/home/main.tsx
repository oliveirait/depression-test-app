import { Box } from 'native-base';
import React from 'react';
import { HeadingButton } from '../HeadingButton';

export const MainTitle = () => {
    return (
      <Box>
          <HeadingButton pb={5} color={'black'} fontSize={30}> 
              Teste de Depressão
          </HeadingButton>
      </Box>
    );
  }

export const MainInfo = () => {
  return (
    <Box>
        <HeadingButton pb={5} pt={5} color={'black'} fontSize={16}> 
            Esta é uma ferramenta de saúde que avalia a gravidade dos sintomas comportamentais e emocionais
            que estão correlacionados a depressão.
        </HeadingButton>
    </Box>
  );
}

export const MainOptions = () => {
    return (
      <Box>
          <HeadingButton pb={5} pt={5} color={'black'} fontSize={16} fontWeight={'thin'} >
              0 - NUNCA - Não se aplica a mim de forma alguma {'\n'}
              1 - ÀS VEZES - Aplica-se a mim em algum grau, ou parte do tempo {'\n'}
              2 - FREQUENTEMENTE - Aplica-se a mim em um grau considerável, ou boa parte do tempo {'\n'}
              3 - QUASE SEMPRE- Aplica-se muito a mim, ou na maioria das vezes {'\n'}
          </HeadingButton>
      </Box>
    );
  }

export const MainOptionsTitle = () => {
    return (
        <Box>
            <HeadingButton pb={5} pt={5} fontSize={16} color={'blue.800'}> 
                Existem 7 itens que precisam ser pontuados conforme listado abaixo
                e o teste leva cerca de 1 minuto:
            </HeadingButton>        
        </Box>
  );
}

export const MainAlert = () => {
    return (
      <Box bgColor={'amber.100'} borderRadius={10} p={2} >
          <HeadingButton pb={5} pt={5} color={'black'} fontSize={16} fontWeight={'light'}>
              O avaliador aconselha o paciente a considerar a primeira resposta que lhe vier à cabeça.
          </HeadingButton>
      </Box>
      
    );
}