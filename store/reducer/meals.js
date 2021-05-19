import { MEALS } from '../../data/dummy-data';
import { SET_FILTERS, TOGGLE_FAVORITE } from '../actions/meals';

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
    case SET_FILTERS:
      const appliedFilters = action.filters;
      const updatedFilteredMeals = state.meals.filter((meal) => {
        if (appliedFilters.glutenFree && !meal.isGlutenFree) {
          return false;
        }
        if (appliedFilters.lactoseFree && !meal.isLactoseFree) {
          return false;
        }
        if (appliedFilters.vegetarian && !meal.isVegetarian) {
          return false;
        }
        if (appliedFilters.vegan && !meal.isVegan) {
          return false;
        }
        return true;
      });
      return { ...state, filteredMeals: updatedFilteredMeals };
    default:
      return state;
  }
};

export default mealsReducer;
