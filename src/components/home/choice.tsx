import React from 'react';
import { Heading, IHeadingProps } from 'native-base';

const fontSize = 18
const fontWeight = 'bold'
const textAlign = 'left'
const w = '90%'
const h = '80%'

export function Head({...rest}: IHeadingProps) {
    return (
        <Heading 
            w={w}
            fontSize={fontSize} 
            textAlign={textAlign} 
            fontWeight={fontWeight}
            {...rest} > 
        </Heading>
    )
}

export function Answer0() {
    return <Head> NUNCA </Head>
}

export function Answer1() {
    return <Head> ÀS VEZES </Head>
}

export function Answer2() {
    return <Head> FREQUENTEMENTE </Head>
}

export function Answer3() {
    return <Head> SEMPRE </Head>
}