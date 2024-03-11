import { useCallback, useState } from "react";
import { TextInput, View, StyleSheet, Pressable } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

type TodoInputProps = {
  onAdd?: (text: string) => void;
};

export default function ToDoInput({ onAdd }: TodoInputProps) {
  const [text, setText] = useState("");

  const handleAdd = useCallback(() => {
    if (!text) return;
    onAdd?.(text);
    setText("");
  }, [onAdd, text]);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={setText}
        placeholder="Add a to-do"
        maxLength={30}
        onSubmitEditing={handleAdd}
      />
      <Pressable onPress={handleAdd}>
        <Ionicons name="add-circle-outline" style={styles.btn} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  input: {
    borderWidth: 2,
    borderRadius: 5,
    borderColor: "teal",
    padding: 8,
    margin: 10,
    width: 250,
  },
  btn: {
    color: "teal",
    fontSize: 50,
  },
});
