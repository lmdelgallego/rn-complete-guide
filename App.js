import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, View, StyleSheet } from 'react-native';
import * as Notification from 'expo-notifications';

export default function App() {
  const triggerNotificationsHandler = () => {
    Notification.scheduleNotificationAsync({
      content: {
        title: 'Fist local notification',
        body: 'This is a local notification we are sending',
      },
      trigger: {
        seconds: 10,
      },
      identifier: '',
    });
  };

  return (
    <View style={styles.container}>
      <Button
        title='Trigger Notification'
        onPress={triggerNotificationsHandler}
      />
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
