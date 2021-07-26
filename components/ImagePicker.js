import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Image, Button, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Color from '../constants/Color';

const ImgPicker = () => {
  const verifyPermission = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert(
        'Insufficient permission !!!',
        'You need to grand camera permission to use this app',
        [{ text: 'Ok' }]
      );
      return false;
    }
    return true;
  };

  const takeImageHandler = async () => {
    const hasPermission = await verifyPermission();
    if (!hasPermission) {
      return;
    }
    let result = await ImagePicker.launchCameraAsync();

    console.log(result);
  };

  return (
    <View style={styles.imagePicker}>
      <View style={styles.imagePreview}>
        <Text>No image picked yet</Text>
        <Image style={styles.image} />
      </View>
      <Button
        title='Take Image'
        color={Color.primary}
        onPress={takeImageHandler}
      />
    </View>
  );
};

export default ImgPicker;

const styles = StyleSheet.create({
  imagePicker: {
    alignItems: 'center',
  },
  imagePreview: {
    width: '100%',
    height: 200,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
