import { View, Text, StyleSheet } from "react-native";

type StatCardProps = {
  title: string;
  value?: number;
};

export default function StatCard({ title, value }: StatCardProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "white",
    padding: 20,
    marginHorizontal: 10,
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 10,
    shadowColor: "teal",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 3,
  },
  title: {
    fontSize: 24,
    color: "teal",
  },
  value: {
    fontSize: 24,
  },
});
