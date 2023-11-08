import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/HomeScreen';
import ExerciseScreen from './components/ExerciseScreen';
import WorkoutScreen from './components/WorkoutScreen';
import RestScreen from './components/RestScreen';
import { ExerciseProvider } from './ExerciseContext';

function App() {
  const Stack = createStackNavigator();

 
  return (
    <ExerciseProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Exercise" component={ExerciseScreen} />
        <Stack.Screen name="RestScreen" component={RestScreen} />
        <Stack.Screen name="Workout" component={WorkoutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </ExerciseProvider>
  );
}

export default App;
