import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import CategoriesScreen from '../screen/CategoriesScreen';
import CategoryMealsScreen from '../screen/CategoryMealsScreen';
import MealDetailScreen from '../screen/MealDetailScreen';

const MealsNavigatior = createStackNavigator({
  Categories: CategoriesScreen,
  CategoryMeals: {
    screen: CategoryMealsScreen,
  },
  MealDetail: MealDetailScreen,
});

export default createAppContainer(MealsNavigatior);
