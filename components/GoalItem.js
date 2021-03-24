import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const GoalItem = (props) => {
  const goal = props.goal.item;
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={props.onDelete}>
      <View key={goal.key} style={styles.listItems}>
        <Text>{goal.value}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItems: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: 'grey',
    borderColor: 'black',
    borderWidth: 1,
  },
});

export default GoalItem;
