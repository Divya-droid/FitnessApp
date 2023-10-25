/** 
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, ImageBackground, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 


const exercises = [
  { id: 1, name: 'Push-ups', image: require('../assets/push_ups.png'), gif: require('../assets/pushup.gif' ) },
  { id: 2, name: 'Sit-ups', image: require('../assets/situps.png'), gif: require('../assets/situp.gif') },
  { id: 3, name: 'Squats', image: require('../assets/squat.png'), gif: require('../assets/squat.gif') },
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

  // Calculate workout statistics
  const workoutsPerformed = completedExercises.length;
  const caloriesBurned = workoutsPerformed * 100; // Adjust this value as needed
  const totalWorkoutMinutes = workoutsPerformed * 30; // Adjust this value as needed

  return (
    <ImageBackground source={require('../assets/bg_img.jpg')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <View style={styles.statisticsContainer}>
          <View style={styles.statisticsItem}>
            <Text style={styles.statisticsText}>{workoutsPerformed}</Text>
            <Text style={styles.statisticsLabel}>Workouts</Text>
          </View>
          <View style={styles.statisticsItem}>
            <Text style={styles.statisticsText}>{caloriesBurned} </Text>
            <Text style={styles.statisticsLabel}>KCALS</Text>
          </View>
          <View style={styles.statisticsItem}>
            <Text style={styles.statisticsText}>{totalWorkoutMinutes} </Text>
            <Text style={styles.statisticsLabel}>MINS</Text>
          </View>
        </View>
        <ScrollView style={styles.scrollView}>
          {exercises.map((exercise) => (
            <View key={exercise.id} style={styles.exerciseContainer}>
             <Text style={styles.exerciseName}>{exercise.name}</Text>
              <Image source={exercise.image} style={styles.imageStyle} />
              <TouchableOpacity
                style={styles.startExerciseButton}
                onPress={() => navigation.navigate('Exercise', { exercise })}
              >
                <Text style={styles.startExerciseButtonText}>Start Exercise</Text>
                <Icon name="bolt" size={20} color="goldenrod" style={styles.lightningIcon} />
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
    backgroundImage: {
      flex: 1,
      resizeMode: 'cover', // or 'stretch' as per your preference
    },
    container: {
      flex: 1,
      backgroundColor: 'transparent', // Make the container background transparent
      padding: 20,
    },
    statisticsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      marginBottom: 20,
    },
    statisticsItem: {
      flex: 1,
      
    },
    statisticsLabel: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 5,
      textAlign: 'center',
      color: 'white', 
    },
    statisticsText: {
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
      color: 'white', 
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
      textAlign: 'center',
    },
    imageStyle: {
      width: '100%',
      height: 290,
    },
    
    exerciseHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center', 
      marginTop: 10, 
    },
    lightningIcon: {
      marginLeft: 5,
    },
    startExerciseButton: {
      backgroundColor: 'black', // Background color
      borderRadius: 10,
      paddingVertical: 10,
      paddingHorizontal: 20,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 10,
    },
    startExerciseButtonText: {
      color: 'white', // Text color
    },
  
  });
  
  export default HomeScreen;




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
*/
  