//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import TitleText from '../components/TitleText';
import BodyText from '../components/BodyText';

// create a component
const GameOverScreen = (props) => {
  return (
    <View style={styles.container}>
      <TitleText>The Game is Over!!!</TitleText>
      <View style={styles.imageContainer}>
        <Image
          // source={require('../assets/success.png')}
          source={{
            uri:
              'https://www.digitaldealer.com/wp-content/uploads/2014/08/winning.jpg',
          }}
          style={styles.image}
          resizeMode='cover'
        />
      </View>
      <BodyText>Number of rounds: {props.roundsNumber}</BodyText>
      <BodyText>Number was: {props.userNumber}</BodyText>
      <Button title='NEW GAME' onPress={props.onRestart} />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: 'black',
    overflow: 'hidden',
    marginVertical: 30,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

//make this component available to the app
export default GameOverScreen;
