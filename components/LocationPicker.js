import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Alert,
  Button,
} from 'react-native';
import * as Location from 'expo-location';
import Color from '../constants/Color';

const LocationPicker = (props) => {
  const [pickedLocation, setPickedLocation] = useState(false);
  const [isFetching, setIsFetching] = useState();

  const verifyPermission = async () => {
    const { status } = await Location.requestPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert(
        'Insufficient permission !!!',
        'You need to grand location permission to use this app',
        [{ text: 'Ok' }]
      );
      return false;
    }
    return true;
  };
  const getLocationHandler = async () => {
    const hasPermission = await verifyPermission();
    if (!hasPermission) {
      return;
    }
    try {
      setIsFetching(true);
      let location = await Location.getCurrentPositionAsync({
        timeInterval: 5000,
      });
      setPickedLocation({
        lat: location.coords.latitude,
        log: location.coords.longitude,
      });
    } catch (err) {
      Alert.alert(
        'Could not fetch location!',
        'Please try again later or pick a location on the map',
        [{ text: 'Ok' }]
      );
    }
    setIsFetching(false);
  };
  return (
    <View style={styles.locationPicker}>
      <View style={styles.mapPreview}>
        {isFetching ? (
          <ActivityIndicator size='large' color={Color.primary} />
        ) : (
          <Text>No location chosen yet!</Text>
        )}
      </View>
      <Button
        title='Get User Location'
        onPress={getLocationHandler}
        color={Color.primary}
      />
    </View>
  );
};

export default LocationPicker;

const styles = StyleSheet.create({
  locationPicker: {
    marginBottom: 15,
  },
  mapPreview: {
    marginBottom: 10,
    width: '100%',
    height: 150,
    borderWidth: 1,
    borderColor: '#CCC',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
