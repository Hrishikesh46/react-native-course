import { View, Text, StyleSheet, Pressable } from 'react-native';

function GoalItem({ itemData, onDeleteGoal }) {
  return (
    <Pressable
      onPress={onDeleteGoal.bind(this, itemData.item.key)}
      style={(pressedData) => (pressedData.pressed ? styles.pressedItem : null)}
    >
      <Text style={styles.goalItem}>{itemData.item.text}</Text>
    </Pressable>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
    color: 'white',
  },
  pressedItem: {
    opacity: 0.5,
  },
});
