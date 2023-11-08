import React from 'react';
import { View, Text, Button, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

function WorkoutScreen({ route, navigation }) {
  const { exercise, part, img, Name, ID, inst } = route.params;

  const markExerciseAsDone = () => {
   // navigation.navigate('Exercise', { exercise, part });
    navigation.navigate('RestScreen',{exercise,part}); // Navigate to the RestScreen
    
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.exName}>{Name}</Text>
      <Image source={{ uri: img }} style={styles.exerciseImage} />
      <Text style={styles.exName}>Instructions:</Text>
      <Text style={styles.instruction}>{inst}</Text>
      <TouchableOpacity
        style={styles.markAsDoneButton}
        onPress={markExerciseAsDone}
      >
        <Text style={styles.markAsDoneButtonText}>Mark as Done</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black', // Background color of the container
  },
  exerciseImage: {
    width: 350,
    height: 350,
    marginBottom: 20,
  },
  exName: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10, // Slightly reduced margin
  },
  
  instruction: {
    color: 'white',
    fontSize: 16, // Consistent font size
    marginBottom: 20,
  },
  markAsDoneButton: {
    backgroundColor: 'white', // Background color of the button
    padding: 15, // Padding around the button text
    borderRadius: 10, // Rounded corners
  },
  markAsDoneButtonText: {
    fontSize: 18, // Slightly increased font size
    fontWeight: 'bold',
    color: 'black', // Text color of the button
  },
});

export default WorkoutScreen;
