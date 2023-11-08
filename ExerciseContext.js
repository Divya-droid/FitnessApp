// ExerciseContext.js
/**
import { createContext, useContext, useState } from 'react';

const ExerciseContext = createContext();

export const useExerciseContext = () => {
  return useContext(ExerciseContext);
};

export const ExerciseProvider = ({ children }) => {
    const exercises = [
        { id: 1, name: 'back', image: require('./assets/back.png'), altText: 'Back Exercises' },
        { id: 2, name: 'cardio', image: require('./assets/cardio.png'), altText: 'Cardio Exercises' },
        { id: 3, name: 'chest', image: require('./assets/chest.png'), altText: 'Chest Exercises' },
        { id: 4, name: 'lower arms', image: require('./assets/lowarm.png'), altText: 'Lower Arms Exercises' },
        { id: 5, name: 'lower legs', image: require('./assets/lowleg.png'), altText: 'Lower Legs Exercises' },
        { id: 6, name: 'neck', image: require('./assets/neck.png'), altText: 'Neck Exercises' },
        { id: 7, name: 'shoulders', image: require('./assets/shoulder.png'), altText: 'Shoulders Exercises' },
        { id: 8, name: 'upper arms', image: require('./assets/upperarm.png'), altText: 'Upper Arms Exercises' },
        { id: 9, name: 'upper legs', image: require('./assets/upperleg.png'), altText: 'Upper Legs Exercises' },
        { id: 10, name: 'waist', image: require('./assets/waist.png'), altText: 'Waist Exercises' },
        // Add more exercises as needed
      ];
  

  return (
    <ExerciseContext.Provider value={exercises}>
      {children}
    </ExerciseContext.Provider>
  );
};
 */
import { createContext, useContext, useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, getDocs } from 'firebase/firestore';
import Constants from 'expo-constants';
//import FirebaseFetcher from './FirebaseFetcher'; 

const ExerciseContext = createContext();

export const useExerciseContext = () => {
  return useContext(ExerciseContext);
};

// Firebase configuration
const firebaseConfig = {
  apiKey: Constants.expoConfig.extra.apiKey,
  authDomain: Constants.expoConfig.extra.authDomain,
  projectId: Constants.expoConfig.extra.projectId,
  storageBucket: Constants.expoConfig.extra.storageBucket,
  messagingSenderId: Constants.expoConfig.extra.messagingSenderId,
  appId: Constants.expoConfig.extra.appId,
  measurementId: Constants.expoConfig.measurementId
};

const grade = initializeApp(firebaseConfig);
const db = getFirestore(grade);

export const ExerciseProvider = ({ children }) => {
  
  const exercises = [
    { id: 1, name: 'back', image: require('./assets/back.png'), altText: 'Back Exercises' },
    { id: 2, name: 'cardio', image: require('./assets/cardio.png'), altText: 'Cardio Exercises' },
    { id: 3, name: 'chest', image: require('./assets/chest.png'), altText: 'Chest Exercises' },
    { id: 4, name: 'lower arms', image: require('./assets/lowarm.png'), altText: 'Lower Arms Exercises' },
    { id: 5, name: 'lower legs', image: require('./assets/lowleg.png'), altText: 'Lower Legs Exercises' },
    { id: 6, name: 'neck', image: require('./assets/neck.png'), altText: 'Neck Exercises' },
    { id: 7, name: 'shoulders', image: require('./assets/shoulder.png'), altText: 'Shoulders Exercises' },
    { id: 8, name: 'upper arms', image: require('./assets/upperarm.png'), altText: 'Upper Arms Exercises' },
    { id: 9, name: 'upper legs', image: require('./assets/upperleg.png'), altText: 'Upper Legs Exercises' },
    { id: 10, name: 'waist', image: require('./assets/waist.png'), altText: 'Waist Exercises' },
    // Add more exercises as needed
  ];
  const [finalexercises, setExercises] = useState([]);
  const [isDataStored, setIsDataStored] = useState(false);

  useEffect(() => {
    // Check if data has already been stored in Firestore
    if (!isDataStored) {
      storeExercisesInFirestore();
    }
  }, [isDataStored]);

  const storeExercisesInFirestore = async () => {
    const querySnapshot = await getDocs(collection(db,'student'));
     console.log(querySnapshot.size);
    if (querySnapshot.size === 0) {
        console.log("inside if");
    
    for (const exercise of exercises) {
      try {
        await addDoc(collection(db, 'student'), exercise);
        console.log("document is added :",exercise.name);
      } catch (error) {
        console.error('Error adding exercise: ', error);
      }
    }
}
else{
    console.log('Initial data already added.');
    try {
        //const fitnessCollectionRef = collection(db, 'student');
       // const querySnapshot = await getDocs(fitnessCollectionRef);
        const fitnessData = [];
        querySnapshot.forEach((doc) => {
          fitnessData.push(doc.data());
        });
       // onDataFetched(fitnessData);
       setExercises(fitnessData);
       console.log(fitnessData);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
}

    // Mark the data as stored
    setIsDataStored(true);
  };

  return (
    <ExerciseContext.Provider value={finalexercises}>
     
        {children}
      
    </ExerciseContext.Provider>
  );
};

export default db;

