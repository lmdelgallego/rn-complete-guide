import Place from '../models/place';
import { ADD_PLACE, SET_PLACE } from './places-actions';

const initialState = {
  places: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_PLACE:
      return {
        places: action.places.map(
          (place) => new Place(place.id.toString(), place.title, place.imageUrl)
        ),
      };
    case ADD_PLACE:
      const newPlace = new Place(
        action.placeData.id.toString(),
        action.placeData.title,
        action.placeData.image
      );
      return {
        places: state.places.concat(newPlace),
      };
    default:
      return state;
  }
};
