import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../screens/Home';
import { QuestionPageOne } from '../screens/QuestionPageOne';
import { QuestionPageTwo } from '../screens/QuestionPageTwo';
 
const { Navigator, Screen } = createStackNavigator(); 

export function AppRoutes() {
  return (
    <Navigator screenOptions={ {headerShown: false} }>
        <Screen name="home" component={Home} />
        <Screen name="question_page_one" component={QuestionPageOne} />
        <Screen name="question_page_two" component={QuestionPageTwo} />
    </Navigator>
  );
}