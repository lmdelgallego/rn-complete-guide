import React, { useState, useEffect } from 'react';
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
import MapPreview from './MapPreview';

const LocationPicker = (props) => {
  const [pickedLocation, setPickedLocation] = useState(false);
  const [isFetching, setIsFetching] = useState();

  const mapPickedLocation = props.navigation.getParam('pickedLocation');

  useEffect(() => {
    if (mapPickedLocation) {
      setPickedLocation(mapPickedLocation);
    }
  }, [mapPickedLocation]);

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
        lng: location.coords.longitude,
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

  const pickOnMapHandler = (params) => {
    props.navigation.navigate('Map');
  };

  return (
    <View style={styles.locationPicker}>
      <MapPreview
        onPress={pickOnMapHandler}
        style={styles.mapPreview}
        location={pickedLocation}
      >
        {isFetching ? (
          <ActivityIndicator size='large' color={Color.primary} />
        ) : (
          <Text>No location chosen yet!</Text>
        )}
      </MapPreview>
      <View style={styles.actions}>
        <Button
          title='Get User Location'
          onPress={getLocationHandler}
          color={Color.primary}
        />
        <Button
          title='Pick on Map'
          onPress={pickOnMapHandler}
          color={Color.primary}
        />
      </View>
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
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
});
