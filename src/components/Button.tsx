import React from 'react';
import { Button as NativeBaseButton, IButtonProps } from 'native-base'; 

export function Button( {...rest}: IButtonProps ) {
  return (
    <NativeBaseButton
      w='full'
      bg='green.700'
      h={14}
      borderWidth={0}
      px={20}
      
      {...rest} 
    />
  );
}


