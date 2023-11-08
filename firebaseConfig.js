
//import "dotenv/config";
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import Constants from 'expo-constants';



// Load environment variables from .env file
//require('dotenv').config();
const firebaseConfig = {
    apiKey: Constants.expoConfig.extra.apiKey,
    authDomain: Constants.expoConfig.extra.authDomain,
       projectId: Constants.expoConfig.extra.projectId,
       storageBucket: Constants.expoConfig.extra.storageBucket,
        messagingSenderId: Constants.expoConfig.extra.messagingSenderId,
        appId:Constants.expoConfig.extra.appId,
        measurementId:Constants.expoConfig.measurementId
  };
 // console.log(firebaseConfig.apiKey);
  //console.log(firebaseConfig.authDomain);

const grade = initializeApp(firebaseConfig);
//console.log(grade);
const db = getFirestore(grade);
//console.log(db);


export default db;