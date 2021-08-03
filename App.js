import React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import PlacesNavigation from './navigation/PlacesNavigator';
import placesReducer from './store/places-reducer';
import { init } from './helpers/db';

const rootReducer = combineReducers({
  places: placesReducer,
});

init()
  .then(() => {
    console.log('Initialized database');
  })
  .catch((err) => {
    console.log('Initialized db error', err);
  });

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {
  return (
    <Provider store={store}>
      <PlacesNavigation />
    </Provider>
  );
}
