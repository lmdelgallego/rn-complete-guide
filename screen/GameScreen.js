//import liraries
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};

// create a component
const GameScreen = (props) => {
  const [currentGuess, setCurrentGuess] = useState(
    genereateRAndomBetween(1, 100, props.userChoice)
  );
  return (
    <View style={styles.container}>
      <Text>GameScreen</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default GameScreen;
