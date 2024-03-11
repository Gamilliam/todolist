import { useCallback, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { todos } from "../hooks/useTodos";

export default function useStats() {
  const [stats, setStats] = useState<Stat[]>([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const todos = await AsyncStorage.getItem(todos);
        if (todos) {
          setTodos(JSON.parse(todos));
        }
      } catch (e) {
        console.warn("Error fetching todos", e);
      }
    };
    fetchTodos();
  }, []);
  return { todos };
}
