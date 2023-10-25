import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, Image, FlatList } from 'react-native';
import axios from 'axios';

function ExerciseScreen({ route, navigation }) {
  const { exercise , bodyPart} = route.params;
  const [entries, setEntries] = useState([]); // State to store entries

   // Construct the API URL based on the selected body part
   const apiUrl = `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`;
  // Function to mark exercise as done and navigate back to HomeScreen
  const markExerciseAsDone = () => {
    const completedExercise = { id: exercise.id, name: exercise.name };
    navigation.navigate('Home', { completedExercise });
  };

  // Function to fetch entries for the exercise
  const fetchExerciseEntries = async () => {
    try {
      // Make an API request to fetch entries for the exercise
      const response = await axios.get(apiUrl, {
        params: { limit: '10' },
        headers: {
          'X-RapidAPI-Key': 'e74804c842msh4a2fe0d1f61633cp1de889jsn520b48d66d9a',
          'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
        },
      });
      setEntries(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  // Use useEffect to fetch entries when the component loads
  useEffect(() => {
    fetchExerciseEntries();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Exercise List Screen</Text>

      <FlatList
        data={entries}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.entryContainer}>
            <Text style={styles.exerciseName}>{item.name}</Text>
            <Image
              source={{ uri: item.gifUrl }}
              style={styles.gif}
            />
          </View>
        )}
      />
      <Button title="Mark as Done" onPress={markExerciseAsDone} />
      <Button title="Back to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
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
    width: 300, // Set the width for your GIF
    height: 300, // Set the height for your GIF
  },
  entryContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
});

export default ExerciseScreen;
