import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Quiz from '../screens/quiz';
import Result from '../screens/result';
import Home from '../screens/home';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} optons={{headerShown:false}}  />
      <Stack.Screen name="Quiz" component={Quiz}  optons={{headerShown:false}}/>
      <Stack.Screen name="Result" component={Result}  optons={{headerShown:false}}/>



          </Stack.Navigator>
  );
}

export default MyStack;