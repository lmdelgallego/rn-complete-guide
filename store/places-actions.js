import * as FileSystem from 'expo-file-system';
import { fetchPlace, insertPlace } from '../helpers/db';

export const ADD_PLACE = 'ADD_PLACE';
export const SET_PLACE = 'SET_PLACE';

export const addPlace = (title, image) => {
  return async (dispatch) => {
    const fileName = image.split('/').pop();
    const newPath = FileSystem.documentDirectory + fileName;

    try {
      FileSystem.moveAsync({
        from: image,
        to: newPath,
      });
      const dbResult = await insertPlace(
        title,
        newPath,
        'Dummy Address',
        15.6,
        12.3
      );
      console.log('dbResult:', dbResult);
      dispatch({
        type: ADD_PLACE,
        placeData: {
          id: dbResult.insertId,
          title: title,
          image: newPath,
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
