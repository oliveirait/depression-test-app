import React from 'react';
import { Heading } from 'native-base';

const fontSize = 20
const fontWeight = 'thin'
const textAlign = 'left'
const w = 'full'

export function Answer0() {
    return (
        <Heading w={w} fontSize={fontSize} textAlign={textAlign} fontWeight={fontWeight}>
            0 - NUNCA
        </Heading>
    );
}

export function Answer1() {
    return (
        <Heading w={w} fontSize={fontSize} textAlign={textAlign} fontWeight={fontWeight}>
            1 - ÀS VEZES 
        </Heading>
    );
}

export function Answer2() {
    return (
        <Heading w={w}fontSize={fontSize} textAlign={textAlign} fontWeight={fontWeight}>
            2 - FREQUENTEMENTE
        </Heading>
    );
}

export function Answer3() {
    return (
        <Heading w={w} fontSize={fontSize} textAlign={textAlign} fontWeight={fontWeight}>
            3 - QUASE SEMPRE 
        </Heading>
    );
}