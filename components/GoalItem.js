import { StyleSheet, View, Text } from "react-native";

const GoalItem = (props) => {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>{props.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
    // color: "white", // 不會繼承父元素的color
  },
  goalText: {
    color: "white",
  },
});

export default GoalItem;
