import { View, Text, StyleSheet } from "react-native";

function ExpensesSummary({ expenses, periodSummary }) {
  const expensesSum = expenses.reduce((sum, expense) => {
    return sum + expens.amout;
  }, 0);

  return (
    <View style={styles.container}>
      <Text>{periodSummary}</Text>
      <Text>$1{expensesSum.toFixed(2)}(sum)</Text>
    </View>
  );
}

export default ExpensesSummary;

const styles = StyleSheet.create({
  container: {},
});
