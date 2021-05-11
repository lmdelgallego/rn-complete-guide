import MEALS from '../../data/dummy-data';

const mealsInitialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: [],
};

const mealsReducer = (state = mealsInitialState, action) => {
  return state;
};

export default mealsReducer;
