import React from 'react';
import { View, Text, Button, StyleSheet,Image } from 'react-native';

function ExerciseScreen({ route, navigation }) {
  const { exercise } = route.params;

  // Function to mark exercise as done and navigate back to HomeScreen
  const markExerciseAsDone = () => {
    const completedExercise = { id: exercise.id, name: exercise.name };
    navigation.navigate('Home', { completedExercise });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Exercise Screen</Text>
      <Text style={styles.exerciseName}>{exercise.name}</Text>
      <Image
        source={exercise.gif} // Update with the path to your GIF for this exercise
        style={styles.gif}
      />
      <Button title="Mark as Done" onPress={markExerciseAsDone} />
      <Button title="Back to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  exerciseName: {
    fontSize: 22,
    marginBottom: 20,
  },
  gif: {
    width: 300,  // Set the width for your GIF
    height: 300, // Set the height for your GIF
  },
});

export default ExerciseScreen;
