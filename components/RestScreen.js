import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const RestScreen = ({ route,navigation }) => {
  const { exercise, part } = route.params;
  const [secondsRemaining, setSecondsRemaining] = useState(10);

  useEffect(() => {
    const interval = setInterval(() => {
      if (secondsRemaining > 0) {
        setSecondsRemaining(secondsRemaining - 1);
      } else {
        // Navigate back to the WorkoutScreen when the countdown is finished
        navigation.navigate('Exercise', { exercise, part });
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [secondsRemaining, navigation]);

  return (
    <View style={styles.container}>
      <Image source={require('../assets/rest.jpg')} style={styles.restImage} />
      <Text style={styles.text}>Breathe In, Breathe Out</Text>
      <Text style={styles.timer}> {secondsRemaining} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  restImage: {
    width: 300,
    height: 300,
    marginBottom: 20,
  },
  text: {
    fontSize: 24,
    color: 'white',
    marginBottom: 20,
  },
  timer: {
    fontSize: 50,
    color: 'white',
  },
});

export default RestScreen;
