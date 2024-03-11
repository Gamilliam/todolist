import {
  Button,
  View,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from "react-native";
import { useCallback, useState } from "react";
import { StatCard } from "../components";
import { useTodos } from "../hooks";

export default function Stats() {
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);
  const [RefreshData, setRefreshData] = useState(false);
  const { todos, setTodo } = useTodos();
  const todosdone = todos.filter((todo) => todo.done).length;
  const todosleft = todos.filter((todo) => !todo.done).length;

  return (
    <SafeAreaView>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <View>
          <StatCard title="Total" value={todos.length} />
          <StatCard title="Done" value={todosdone} />
          <StatCard title="Left" value={todosleft} />
          <Button
            title="Refresh"
            onPress={() => setRefreshData(!RefreshData)}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
