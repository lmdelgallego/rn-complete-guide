import MapView from 'react-native-maps';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const MapScreen = () => {
  const mapRegion = {
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };
  return <MapView region={mapRegion} style={styles.map} />;
};

export default MapScreen;

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});
