import { Tabs } from "expo-router";
import { StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          headerTitle: "ToDoList",
          tabBarLabel: "To-do list",
          headerStyle: styles.layout,
          headerTitleStyle: styles.layoutText,
          tabBarStyle: styles.layout,
          tabBarItemStyle: styles.layoutText,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="list"
              size={24}
              color={focused ? "white" : "black"}
            />
          ),
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "black",
        }}
      />
      <Tabs.Screen
        name="stats"
        options={{
          headerTitle: "Stats",
          tabBarLabel: "Stats",
          headerStyle: styles.layout,
          headerTitleStyle: styles.layoutText,
          tabBarStyle: styles.layout,
          tabBarItemStyle: styles.layoutText,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="stats-chart"
              size={24}
              color={focused ? "white" : "black"}
            />
          ),
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "black",
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  layout: {
    backgroundColor: "teal",
  },
  layoutText: {
    backgroundColor: "teal",
    fontSize: 24,
    color: "white",
    fontWeight: "bold",
    letterSpacing: 3,
  },
});
