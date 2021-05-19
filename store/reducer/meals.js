import { MEALS } from '../../data/dummy-data';
import { TOGGLE_FAVORITE } from '../actions/meals';

const mealsInitialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: [],
};

const mealsReducer = (state = mealsInitialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      const existingIndex = state.favoriteMeals.findIndex(
        (meal) => meal.id === action.mealId
      );
      if (existingIndex >= 0) {
        const updateMeals = [...state.favoriteMeals];
        updateMeals.splice(existingIndex, 1);
        return { ...state, favoriteMeals: updateMeals };
      } else {
        return {
          ...state,
          favoriteMeals: state.favoriteMeals.concat(
            state.meals.find((m) => m.id === action.mealId)
          ),
        };
      }
    default:
      return state;
  }
};

export default mealsReducer;
