// FirebaseFetcher.js
import React, { useEffect } from 'react';
import { View } from 'react-native';
import { getDocs, collection } from 'firebase/firestore';
import db from './firebaseConfig';


export const FirebaseFetcher = ({ onDataFetched }) => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const fitnessCollectionRef = collection(db, 'fitness');
        const querySnapshot = await getDocs(fitnessCollectionRef);
        const fitnessData = [];
        querySnapshot.forEach((doc) => {
          fitnessData.push(doc.data());
        });
        onDataFetched(fitnessData);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };
    fetchData();
  }, [onDataFetched]);

  return (
    <View>
      {/* Your JSX here */}
    </View>
  );
};

export default FirebaseFetcher;
