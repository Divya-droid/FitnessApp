import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, Image, ImageBackground,  FlatList, TouchableOpacity } from 'react-native';
import axios from 'axios';

function ExerciseScreen({ route, navigation }) {
  const { exercise, bodyPart } = route.params;
  const [entries, setEntries] = useState([]);

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
    <ImageBackground source= {require('../assets/bg_img.jpg')}  style={styles.backgroundImage}>

    <View style={styles.container}>
      <Text style={styles.header}>{exercise.altText}</Text>
      <Image source={exercise.image} style={styles.eximg} />

      <FlatList
        data={entries}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.entryContainer}>
            <Text style={styles.exerciseName}>{item.name}</Text>
            <Image source={{ uri: item.gifUrl }} style={styles.gif} />

            <TouchableOpacity
              style={[styles.startExerciseButton, { backgroundColor: 'white', width: 200, height: 40 }]}
              onPress={() => navigation.navigate('Workout', { exercise:exercise,part:bodyPart,img:item.gifUrl, Name: item.name , ID:item.id ,inst:item.instructions})}
            >
              <Text style={[styles.starttrainButtonText, { color: 'black', fontWeight: 'bold' }]}>Start Training</Text>
            </TouchableOpacity>
          </View>
        )}
      />
      <TouchableOpacity
      style={[styles.markAsDoneButton]}
      onPress={markExerciseAsDone}>
        <Text style={[styles.markAsDoneButtontext,{color:'white',fontWeight:'bold',fontSize:24}]}>Mark as Done </Text>
      </TouchableOpacity>
      <TouchableOpacity
      style={[styles.backToHomeButton]}
      onPress={() => navigation.navigate('Home')}>
        <Text style={[styles.backToHomeButtontext,{color:'white',fontWeight:'bold',fontSize:20}]}>Home </Text>
      </TouchableOpacity>

      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch' or 'contain'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color:'white'
  },
  exerciseName: {
    fontSize: 22,
    color:'white',
    marginBottom: 20,

  },
  gif: {
    width: 350,
    height: 200,
    marginBottom: 20,
  },
  entryContainer: {
    padding: 10,
    borderBottomWidth: 5,
   borderBottomColor: 'gray',
    alignItems: 'center',
  },
  eximg: {
    width: 350,
    height: 180,
  },
  startExerciseButton: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  starttrainButtonText: {
    fontSize: 16,
    color: 'black',
  },
  
});

export default ExerciseScreen;
