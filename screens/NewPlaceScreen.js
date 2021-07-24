import React from 'react';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux';
import Colors from '../constants/Color';
import * as placesActions from '../store/places-actions';

const NewPlaceScreen = () => {
  const [titleValue, setTitleValue] = useState('');
  const dispatch = useDispatch();
  const titleChangeHandler = (text) => {
    // you could add validation
    setTitleValue(text);
  };
  const savePlaceHandler = () => {
    dispatch(placesActions.addPlace(titleValue));
    props.navigation.goBack();
  };
  return (
    <ScrollView>
      <View style={styles.form}>
        <Text style={styles.label}>Title</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={titleChangeHandler}
          value={titleValue}
        />
        <Button title='Save Place' color={Colors.primary} onPress={() => {}} />
      </View>
    </ScrollView>
  );
};

NewPlaceScreen.navigationOptions = (navData) => {
  return {
    headerTitle: 'Add Places',
  };
};

export default NewPlaceScreen;

const styles = StyleSheet.create({
  form: {
    margin: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 15,
  },
  textInput: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    marginBottom: 15,
    paddingVertical: 4,
    paddingHorizontal: 2,
  },
});
