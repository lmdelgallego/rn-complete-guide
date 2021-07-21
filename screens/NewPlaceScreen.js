import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const NewPlaceScreen = () => {
  return (
    <View>
      <Text>NewPlaceScreen</Text>
    </View>
  );
};

PlacesListScreen.navigationOptions = (navData) => {
  return {
    headerTitle: 'Add Places',
  };
};

export default NewPlaceScreen;

const styles = StyleSheet.create({});
