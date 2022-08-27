import React from 'react';
import { Center, Spinner } from 'native-base';

export function Loading() {
  return (
    <Center flex={1} bg={'white'}>
        <Spinner color="blue.700" size={50}/>
    </Center>
  );
}