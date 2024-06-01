import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Challenge from './Challenge';

const Stack = createNativeStackNavigator();

const Screens = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="챌린지" component={Challenge} />
      <Stack.Screen name="미션" component={Challenge} />
      <Stack.Screen name="MY" component={Challenge} />
    </Stack.Navigator>
  );
};

export default Screens;
