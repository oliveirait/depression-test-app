import React from 'react';
import { useNavigation } from '@react-navigation/native';

const { navigate, goBack } = useNavigation()

export const handleNextPage = (pg: any) => {
    return navigate(pg)
}

export const back = () => {
    return goBack()
}