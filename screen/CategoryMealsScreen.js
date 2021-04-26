import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';

const CategoryMealsScreen = (props) => {
  const catId = props.navigation.getParam('categoryId');
  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);
  return (
    <View style={styles.screen}>
      <Text>The Category Screen !!! {selectedCategory.title}</Text>
      <Button
        title='Go to Details Meals !!!'
        onPress={() => {
          props.navigation.navigate({
            routeName: 'MealDetail',
          });
        }}
      />
      <Button
        title='Go Back'
        onPress={() => {
          props.navigation.pop();
        }}
      />
    </View>
  );
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
  console.log(navigationData);
  const catId = navigationData.navigation.getParam('categoryId');
  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);
  return {
    headerTitle: selectedCategory.title,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CategoryMealsScreen;
