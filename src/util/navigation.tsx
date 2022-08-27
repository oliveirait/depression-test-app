import React from 'react';
import { useNavigation } from '@react-navigation/native';

const navigation = useNavigation()

export const handleNextPage = (pg: any) => {
    return navigation.navigate(pg)
}

export const goBack = () => {
    return navigation.goBack()
}