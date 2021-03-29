//import liraries
import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

// create a component
const Input = (props) => {
  return <TextInput {...props} style={{ ...styles.input, ...props.style }} />;
};

// define your styles
const styles = StyleSheet.create({
  input: {
    height: 30,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    marginVertical: 10,
  },
});

//make this component available to the app
export default Input;
