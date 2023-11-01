import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, ImageBackground, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 

// back, cardio, chest, lower arms, lower legs, neck, shoulders, upper arms, upper legs, waist
const exercises = [
    { id: 1, name: 'back', image: require('../assets/back.png'), altText: 'Back Exercises' },
    { id: 2, name: 'cardio', image: require('../assets/cardio.png'), altText: 'Cardio Exercises' },
    { id: 3, name: 'chest', image: require('../assets/chest.png'), altText: 'Chest Exercises' },
    { id: 4, name: 'lower arms', image: require('../assets/lowarm.png'), altText: 'Lower Arms Exercises' },
    { id: 5, name: 'lower legs', image: require('../assets/lowleg.png'), altText: 'Lower Legs Exercises' },
    { id: 6, name: 'neck', image: require('../assets/neck.png'), altText: 'Neck Exercises' },
    { id: 7, name: 'shoulders', image: require('../assets/shoulder.png'), altText: 'Shoulders Exercises' },
    { id: 8, name: 'upper arms', image: require('../assets/upperarm.png'), altText: 'Upper Arms Exercises' },
    { id: 9, name: 'upper legs', image: require('../assets/upperleg.png'), altText: 'Upper Legs Exercises' },
    { id: 10, name: 'waist', image: require('../assets/waist.png'), altText: 'Waist Exercises' },
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
             {exercise.image ? (
                <Image source={exercise.image} style={styles.imageStyle} />
              ) : (
                <Text style={styles.altText}>{exercise.altText}</Text>
              )}
             
              <TouchableOpacity
                style={styles.startExerciseButton}
                onPress={() => navigation.navigate('Exercise', { exercise , bodyPart: exercise.name  })}
              >
                <Text style={styles.startExerciseButtonText}>Check Out Exercises</Text>
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
    altText: {
        fontSize: 16,
        textAlign: 'center',
        color: 'black', // Specify the color you prefer
      },
  });
  
  export default HomeScreen;