import React from 'react';
import { Image, StyleSheet, View, TouchableOpacity } from 'react-native';
import ENV from '../env';

const MapPreview = (props) => {
  let imagePreviewUrl;
  if (props.location) {
    imagePreviewUrl = `https://api.mapbox.com/styles/v1/mapbox/outdoors-v11/static/pin-s+555555(${
      props.location.lng
    },${props.location.lat})/${props.location.lng},${
      props.location.lat
    },14,0/800x600@2x?before_layer=admin-0-boundary-bg&access_token=${
      ENV().mapBoxApiKey
    }`;
  }

  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{ ...styles.mapPreview, ...props.style }}
    >
      {props.location ? (
        <Image style={styles.mapImage} source={{ uri: imagePreviewUrl }} />
      ) : (
        props.children
      )}
    </TouchableOpacity>
  );
};

export default MapPreview;

const styles = StyleSheet.create({
  mapPreview: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  mapImage: {
    width: '100%',
    height: '100%',
  },
});
