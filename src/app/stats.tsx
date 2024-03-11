import { View, StyleSheet } from "react-native";
import { StatCard } from "../components";
import { useTodos } from "../hooks";

export default function Stats() {
  const { todos } = useTodos();
  const todosdone = todos.filter((todo) => todo.done).length;
  const todosleft = todos.filter((todo) => !todo.done).length;

  return (
    <View>
      <StatCard title="Total" value={todos.length} />
      <StatCard title="Done" value={todosdone} />
      <StatCard title="Left" value={todosleft} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
