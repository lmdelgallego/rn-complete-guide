import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, View, StyleSheet } from 'react-native';
import * as Notification from 'expo-notifications';
import * as Permission from 'expo-permissions';

Notification.setNotificationHandler({
  handleNotification: async () => {
    return {
      shouldShowAlert: true,
    };
  },
});

export default function App() {
  useEffect(() => {
    Permission.getAsync(Permission.NOTIFICATIONS)
      .then((statusObj) => {
        if (statusObj.status !== 'granted') {
          return Permission.askAsync(Permission.NOTIFICATIONS);
        }
        return statusObj;
      })
      .then((statusObj) => {
        if (statusObj.status !== 'granted') {
          throw new Error('Permission not granted');
        }
      })
      .then(() => {})
      .catch((error) => {
        return null;
      });
  }, []);

  useEffect(() => {
    const backgroundSubscription =
      Notification.addNotificationResponseReceivedListener((response) => {
        console.log(response);
      });

    const foregroundSubscription = Notification.addNotificationReceivedListener(
      (notification) => {
        console.log(notification);
      }
    );

    return () => {
      foregroundSubscription.remove();
      backgroundSubscription.remove();
    };
  }, []);

  const triggerNotificationsHandler = () => {
    // Notification.scheduleNotificationAsync({
    //   content: {
    //     title: 'Fist local notification',
    //     body: 'This is a local notification we are sending',
    //     data: {
    //       id: '1129569188',
    //     },
    //   },
    //   trigger: {
    //     seconds: 10,
    //   },
    //   identifier: '',
    // });
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
