// import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, TextInput, View, Button, FlatList } from "react-native";

import GoalItem from "./components/GoalItem";

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    // setCourseGoals([...courseGoals, enteredGoalText]);   // 不好的做法

    // 更推薦的做法
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.TextInput}
          placeholder="111122"
          onChangeText={goalInputHandler}
        ></TextInput>
        <Button title="Add Goal" onPress={addGoalHandler}></Button>
      </View>

      <View style={styles.goalsContainer}>
        {/* ScrollView會把所有內容都呈現出來即便不在可視範圍內,IOS中Text並不支援圓角所以使用View包起來 
        <ScrollView>
          {courseGoals.map((goal) => (
            <View key={goal} style={styles.goalItem}>
              <Text style={styles.goalText}>{goal}</Text>              
            </View>
          ))}
        </ScrollView> */}

        <FlatList
          data={courseGoals}
          keyExtractor={(item, index) => item.id}
          renderItem={(itemData) => {
            return <GoalItem text={itemData.item.text} />;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  TextInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 5,
  },
});
