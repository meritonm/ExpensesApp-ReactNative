import { View, Text, StyleSheet } from "react-native";

function ExpensesSummary() {
  return (
    <View style={styles.container}>
      <Text>Last 7 days</Text>
      <Text>$177.95 (sum)</Text>
    </View>
  );
}

export default ExpensesSummary;

const styles = StyleSheet.create({
  container: {},
});
