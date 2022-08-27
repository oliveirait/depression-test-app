import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../screens/Home';
import { QuestionPageOne } from '../screens/QuestionPageOne';
import { QuestionPageTwo } from '../screens/QuestionPageTwo';
import { QuestionPageThree } from '../screens/QuestionPageThree';
import { QuestionPageFour } from '../screens/QuestionPageFour';
import { QuestionPageFive } from '../screens/QuestionPageFive';

const { Navigator, Screen } = createStackNavigator(); 

export function AppRoutes() {
  return (
    <Navigator screenOptions={ {headerShown: false} }>
        <Screen name="home" component={Home} />
        <Screen name="question_page_one" component={QuestionPageOne} />
        <Screen name="question_page_two" component={QuestionPageTwo} />
        <Screen name="question_page_three" component={QuestionPageThree} />
        <Screen name="question_page_four" component={QuestionPageFour} />
        <Screen name="question_page_five" component={QuestionPageFive} />
    </Navigator>
  );
}