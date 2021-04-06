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
      <Image source={require('../assets/success.png')} />
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
});

//make this component available to the app
export default GameOverScreen;
