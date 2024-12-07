import { View, StyleSheet } from "react-native";
import React, { useContext } from "react";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpenseContext } from "../store/expense-context";
import { getDateMinusDays } from "../util/Date";

function RecentExpenses() {
  const expensesCts = useContext(ExpenseContext);

  // Kontrollo nëse ka të dhëna
  console.log("All Expenses:", expensesCts.expenses);

  const recentExpneses = expensesCts.expenses.filter((expense) => {
    const today = new Date();
    const date7daysAgo = getDateMinusDays(today, 7);

    // Konvertoni datën në objekt Date nëse është string
    const expenseDate = new Date(expense.date);
    return expenseDate > date7daysAgo;
  });

  // Kontrollo shpenzimet e filtruara
  console.log("Recent Expenses:", recentExpneses);

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
