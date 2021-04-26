import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import CategoriesScreen from '../screen/CategoriesScreen';
import CategoryMealsScreen from '../screen/CategoryMealsScreen';
import MealDetailScreen from '../screen/MealDetailScreen';

import Colors from '../constants/Colors';

const MealsNavigatior = createStackNavigator(
  {
    Categories: CategoriesScreen,
    CategoryMeals: {
      screen: CategoryMealsScreen,
    },
    MealDetail: MealDetailScreen,
  },
  {
    headerMode: 'float',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primary : '',
      },
      headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary,
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

export default createAppContainer(MealsNavigatior);
