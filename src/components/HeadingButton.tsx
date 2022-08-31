import React from 'react';
import { Heading, IHeadingProps } from 'native-base';

export function HeadingButton( {...rest}: IHeadingProps) {
  return <Heading fontSize={16} color={'white'} textAlign={'center'} {...rest} />
}