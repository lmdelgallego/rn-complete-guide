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
    <View
      style={{
        padding: 40,
      }}
    >
      <View>
        <TextInput
          placeholder='Course Goal'
          style={{
            borderRadius: 8,
            borderColor: 'black',
            borderWidth: 1,
            padding: 10,
            marginBottom: 8,
          }}
        />
        <Button title='ADD' />
      </View>

      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({});
