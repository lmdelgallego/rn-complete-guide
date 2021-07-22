import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const NewPlaceScreen = () => {
  return (
    <View>
      <Text>Title</Text>
    </View>
  );
};

NewPlaceScreen.navigationOptions = (navData) => {
  return {
    headerTitle: 'Add Places',
  };
};

export default NewPlaceScreen;

const styles = StyleSheet.create({});
