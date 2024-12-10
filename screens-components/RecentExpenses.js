import { View, StyleSheet } from "react-native";
import React, { useContext } from "react";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpenseContext } from "../store/expense-context";
import { getDateMinusDays } from "../util/Date";

function RecentExpenses() {
  const expensesCts = useContext(ExpenseContext);

  const recentExpneses = expensesCts.expenses.filter((expense) => {
    const today = new Date();
    const date7daysAgo = getDateMinusDays(today, 7);

    const expenseDate = new Date(expense.date);
    return expenseDate > date7daysAgo;
  });

  return (
    <View style={styles.container}>
      <ExpensesOutput
        expenses={recentExpneses}
        expensesPeriod="Last 7 days"
        fallBackText="No Recent Expenese on last 7 days"
      />
    </View>
  );
}

export default RecentExpenses;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
