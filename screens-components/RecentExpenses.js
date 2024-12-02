import { View, Text, StyleSheet } from "react-native";
import React from "react";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";

function RecentExpenses() {
  return (
    <View style={styles.container}>
      <ExpensesOutput expensesPeriod="Last 7 days" />
    </View>
  );
}

export default RecentExpenses;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
