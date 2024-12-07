import { View, StyleSheet } from "react-native";
import { useContext } from "react";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpenseContext } from "../store/expense-context";

function AllExpenses() {
  const expensesCtx = useContext(ExpenseContext);

  return (
    <View style={styles.container}>
      <ExpensesOutput
        expenses={expensesCtx.expenses}
        expensesPeriod="Total"
        fallBackText="on All expenses nothing to show"
      />
    </View>
  );
}

export default AllExpenses;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
