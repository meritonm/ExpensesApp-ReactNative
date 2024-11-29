import { View, StyleSheet } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";

function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={expenses} periodSummary={expensesPeriod} />
      <ExpensesList />
    </View>
  );
}

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {},
});
