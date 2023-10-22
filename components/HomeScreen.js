import React, { useState } from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const exercises = [
  { id: 1, name: 'Push-ups', image: require('../assets/push_ups.png'),gif: require('../assets/pushup.gif') },
  { id: 2, name: 'Sit-ups', image: require('../assets/situps.png'),gif: require('../assets/situp.gif') },
  { id: 3, name: 'Squats', image: require('../assets/squat.png'),gif: require('../assets/squat.gif') },
  // Add more exercises as needed
];

function HomeScreen({ route, navigation }) {
  const [completedExercises, setCompletedExercises] = useState([]);

  // Check if a completed exercise was passed from ExerciseScreen
  const { params } = route;
  if (params && params.completedExercise) {
    const completedExercise = params.completedExercise;

    // Check if the exercise is not already in the completed list
    if (!completedExercises.find((exercise) => exercise.id === completedExercise.id)) {
      setCompletedExercises([...completedExercises, completedExercise]);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome to Fitness App</Text>
      <ScrollView style={styles.scrollView}>
        {exercises.map((exercise) => (
          <View key={exercise.id} style={styles.exerciseContainer}>
            <Text style={styles.exerciseName}>{exercise.name}</Text>
            <Image
              source={exercise.image}
              style={styles.imageStyle}
            />
            <Button
              title="Start Exercise"
              onPress={() => navigation.navigate('Exercise', { exercise })}
            />
          </View>
        ))}
        <Text style={styles.completedText}>Completed Exercises:</Text>
        {completedExercises.map((completedExercise) => (
          <Text key={completedExercise.id} style={styles.completedExercise}>
            {completedExercise.name}
          </Text>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
    padding: 20,
  },
  welcomeText: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  scrollView: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
  },
  exerciseContainer: {
    marginBottom: 20,
  },
  exerciseName: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  completedText: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  completedExercise: {
    fontSize: 16,
  },
  imageStyle: {
    width: '100%',
    height: 290,
  },
});

export default HomeScreen;
