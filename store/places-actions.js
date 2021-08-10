import * as FileSystem from 'expo-file-system';
import { fetchPlace, insertPlace } from '../helpers/db';
import ENV from '../env';

export const ADD_PLACE = 'ADD_PLACE';
export const SET_PLACE = 'SET_PLACE';

export const addPlace = (title, image, location) => {
  return async (dispatch) => {
    const response = await fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${location.lng},${
        location.lat
      }.json?access_token=${ENV().mapBoxApiKey}`
    );

    if (!response.ok) {
      throw new Error('Something went wrong with geocoding');
    }
    const resData = await response.json();
    // if (!resData.result) { para google
    if (!resData.features) {
      throw new Error('Something went wrong with geocoding');
    }
    const address = resData.features[0].place_name;
    const fileName = image.split('/').pop();
    const newPath = FileSystem.documentDirectory + fileName;

    console.log(address);

    try {
      FileSystem.moveAsync({
        from: image,
        to: newPath,
      });
      const dbResult = await insertPlace(
        title,
        newPath,
        address,
        location.lat,
        location.lng
      );
      console.log('dbResult:', dbResult);
      dispatch({
        type: ADD_PLACE,
        placeData: {
          id: dbResult.insertId,
          title: title,
          image: newPath,
          address: address,
          coords: { lat: location.lat, lng: location.lng },
        },
      });
    } catch (err) {
      console.log(err);
      throw err;
    }
  };
};

export const loadPlace = () => {
  return async (dispatch) => {
    try {
      const dbResult = await fetchPlace();
      console.log(dbResult.rows._array);
      dispatch({ type: SET_PLACE, places: dbResult.rows._array });
    } catch (err) {
      console.log(err);
      throw err;
    }
  };
};
