import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  SafeAreaView,
} from 'react-native';

export default function App() {
  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput placeholder='Course Goal' style={styles.input} />
        <Button title='ADD' />
      </View>

      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    borderRadius: 8,
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    width: '80%',
  },
});
